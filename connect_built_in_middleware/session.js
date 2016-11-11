var connect = require('connect');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');


var app = connect()
	// .use(cookieParser('tobi is a cool ferret'))
	.use(cookieSession({
		name: 'session',
		keys: ['tobi is a cool ferret']
	}))
	.use(function(req, res, next) {
		var sess = req.session;
		if (sess.views) {
			res.setHeader('Content-Type', 'text/html');
      res.write('<p>views: ' + sess.views + '</p>');
      res.end();
      sess.views++;
		} else {
			sess.views = 1;
			res.end('welcome to the session demo. refresh!');
		}
	});

app.listen(3000);