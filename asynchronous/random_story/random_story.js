var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFileName = './rss_feeds.txt';

function checkForRSSFile() {
	fs.exists(configFileName, function(exists) {
		if (!exists) {
			return 
		}
		next(null, configFileName);
	});
}

function readRSSFile(configFileName) {
	fs.readFile(configFileName, function(err, feedList) {
		if (err) return next(err);

		feedList = feedList
								.toString()
								.replace(/^\s+|\s+$/g, '')
								.split("\n");

		var random = Math.floor(Math.random()*feedList.length);
		next(null, feedList[random]);
	});
}

function downloadRSSFeed(feedUrl) {
	request({url: feedUrl}, function(err, res, body) {
		if (err) return next(err);
		if (res.statusCode != 200)
				return next(new Error('Abnormal response status code'));

		next(null, body);
	});
}

function parseRSSFeed(rss) {
	var handler = new htmlparser.RssHandler();
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(rss);

	if (!handler.dom.items.length)
		return next(new Error('No RSS items found'));

	var item = handler.dom.items.shift();
	console.log(item.title);
	console.log(item.link);
}



// 这里是各个按序排列的要执行的任务。
var tasks = [
	checkForRSSFile,
	readRSSFile,
	downloadRSSFeed,
	parseRSSFeed
];

// 下面这个function很短，但是作用很关键，它就像一个过渡的轴一样，做两件事，一是当产生错误
// 的时候，throw error，第二就是没有错误的时候执行下一个任务。
function next(err, result) {
	if (err) throw err;

	var currentTask = tasks.shift();

	if (currentTask) {
		currentTask(result);
	}
}

next();




















































