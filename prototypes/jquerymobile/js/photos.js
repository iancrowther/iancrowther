$(document).ready(function() {
	// Picasa public Gallery
	$.getJSON("http://picasaweb.google.com/data/feed/api/user/crowther.ian?alt=json&callback=?", function(data) {
		$.each(data.feed.entry, function(i,item) {
			$("<li>")
				.append($("<a>").attr("href", item.media$group.media$thumbnail[0].url)
					.append($("<img>")
						.attr("src", item.media$group.media$thumbnail[0].url)))
							.appendTo($("#gallery"));
		});
		var myPhotoSwipe = $("#gallery a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
		//$("#gallery").listview("refresh");
	});
});