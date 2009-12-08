var one_day=1000*60*60*24;
var one_month=1000*60*60*24*30;
var one_year=1000*60*60*24*30*12;

function displayage(yr, mon, day, unit, decimal, round){
	today=new Date()
	var pastdate=new Date(yr, mon-1, day)

	var countunit=unit;
	var decimals=decimal;
	var rounding=round;

	finalunit=(countunit=="days")? one_day : (countunit=="months")? one_month : one_year
	decimals=(decimals<=0)? 1 : decimals*10

	if (unit!="years"){
		if (rounding=="rounddown")
			document.write(Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit)
		else
			document.write(Math.ceil((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit)
		}
	else{
		yearspast=today.getFullYear()-yr-1
		tail=(today.getMonth()>mon-1 || today.getMonth()==mon-1 && today.getDate()>=day)? 1 : 0
		pastdate.setFullYear(today.getFullYear())
		pastdate2=new Date(today.getFullYear()-1, mon-1, day)
		tail=(tail==1)? tail+Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals : Math.floor((today.getTime()-pastdate2.getTime())/(finalunit)*decimals)/decimals
		document.write(yearspast+tail)
	}
}

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