function twitter () {
	var feed = new google.feeds.Feed("http://twitter.com/statuses/user_timeline/iancrowther.rss");
	feed.setNumEntries(5);
	feed.load(function(result) {
	
	var container = document.getElementById("twitterContent");	
		if (!result.error) {
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var item = document.createElement('a');
					item.href = entry.link;
					item.className = 'contentlink';
					item.appendChild(document.createTextNode(unescape(entry.title.substr(13))));
					item.appendChild(document.createElement('br'));
					item.appendChild(document.createElement('br'));
				container.appendChild(item);
			}
		}
		else {
			var feedback = document.createElement('div');
				feedback.id = 'twitterError';
				feedback.appendChild(document.createTextNode('Failed to load tweets, refresh'));
			container.appendChild(feedback);
		}
	});
}