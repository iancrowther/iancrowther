function delicious(){var a=new google.feeds.Feed("http://feeds.delicious.com/v2/rss/iancrowther?count=5");a.setNumEntries(5);a.load(function(b){var d=document.getElementById("deliciousContent");if(!b.error){for(var e=0;e<b.feed.entries.length;e++){var g=b.feed.entries[e];var f=document.createElement("a");f.href=g.link;f.className="contentlink";f.appendChild(document.createTextNode(unescape(g.title)));f.appendChild(document.createElement("br"));f.appendChild(document.createElement("br"));d.appendChild(f)}}else{var c=document.createElement("div");c.id="deliciousError";c.appendChild(document.createTextNode("Failed to load tags, refresh"));d.appendChild(c)}})};