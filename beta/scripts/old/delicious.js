function delicious () {
	var feed = new google.feeds.Feed("http://feeds.delicious.com/v2/rss/iancrowther?count=5");
	feed.setNumEntries(5);
	feed.load(function(result) {
		
	var container = document.getElementById("deliciousContent");	
		if (!result.error) {
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var item = document.createElement('a');
					item.href = entry.link;
					item.className = 'contentlink';
					item.appendChild(document.createTextNode(unescape(entry.title)));
					item.appendChild(document.createElement('br'));
					item.appendChild(document.createElement('br'));
				container.appendChild(item);
			}
		}
		else {
			var feedback = document.createElement('div');
				feedback.id = 'deliciousError';
				feedback.appendChild(document.createTextNode('Failed to load tags, refresh'));
			container.appendChild(feedback);
		}
	});
}