function googlereader () {
	var feed = new google.feeds.Feed("http://www.google.com/reader/public/atom/user%2F02227762350607711900%2Fstate%2Fcom.google%2Fbroadcast");
	feed.setNumEntries(5);
	feed.load(function(result) {
	
	var container = document.getElementById("googleReaderContent");	
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
			var feedback = document.createElement("div");
				feedback.id = 'googlereaderError';
				feedback.appendChild(document.createTextNode('Failed to load articles, refresh'));
			container.appendChild(feedback);
		}
	});
}
