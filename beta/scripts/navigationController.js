YAHOO.namespace("infinitefocus.widgets");
var infinitefocus = YAHOO.infinitefocus;
(function() {
    infinitefocus.widgets.NavigationController = function(userConfig) {
        this.init(userConfig || {});
    };
    var Lang = YAHOO.lang,
        Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event,
        AttributeProvider = YAHOO.util.AttributeProvider,
        NavigationController = infinitefocus.widgets.NavigationController;

    infinitefocus.widgets.NavigationController.prototype = {
        init: function(userConfig) {
            this.initAttributes(userConfig);
            this.GetLinks();
        },
        initAttributes: function(attr) {
            this.setAttributeConfig('links', {
                value: (attr.links),
                validator: Lang.isObject,
                writeOnce: true
            });
			this.setAttributes(attr, true);
        },
		GetLinks: function(){
			var links = this.get('links');
			
			if (links != null)
			{
				for(var link in links){
					this.AddListener(links[link]);
				}
			}	
		},
		AddListener: function(link){
			var element = Dom.get(link.element);
			Event.on(element, 'click', function(e) { 
				var content = Dom.get(element.id + 'Content');
				if (Dom.get(content).style.display === "") {
					if (Dom.hasClass(content, 'pageload')){
						Dom.removeClass(Dom.get(content), 'pageload');
						this.Show(content); 
					}
					else{
						if (Dom.hasClass(content, 'hidden')){
							this.Show(content); 
							window.scrollTo(link.x, link.y);
						}
						else{
							this.Hide(content);
							window.scrollTo(0, 0);				
						}

					}
				}
				else{
					if (Dom.hasClass(content, 'hidden')){
							this.Show(content); 
							window.scrollTo(link.x, link.y);
					}
					else{
						this.Hide(content);
						window.scrollTo(0, 0);				
					}
				}
				
				this.Hide(Dom.get(link.a).id + 'Content');
				this.Hide(Dom.get(link.b).id + 'Content');
				this.Hide(Dom.get(link.c).id + 'Content');
				this.Hide(Dom.get(link.d).id + 'Content');
							
				Event.stopEvent(e);
				return false;
			}, this, true); 
		},
		Show: function(element){
			Dom.removeClass(Dom.get(element), 'hidden');
			Dom.setStyle(Dom.get(element), 'display', 'block');
		},
		Hide: function(element){
			Dom.addClass(Dom.get(element), 'hidden');
			Dom.setStyle(Dom.get(element), 'display', 'none');
		}
    };
    YAHOO.augment(NavigationController, AttributeProvider);
})();