var connect = require('connect');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');


var hour = 3600000;
var sessionOpts = {
  name: 'session',
  keys: 'myapp_sid',
  cookie: { maxAge: hour * 24, secure: true, httpOnly: true }
};


var app = connect()
	.use(cookieParser())
	.use(cookieSession(sessionOpts))
	.use(function(req, res, next) {
		var sess = req.session;
		if (sess.views) {
			res.setHeader('Content-Type', 'text/html');
		  res.write('<p>views: ' + sess.views + '</p>');
			res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>'); 
			res.write('<p>httpOnly: ' + sess.cookie.httpOnly + '</p>'); 
			// res.write('<p>path: ' + sess.cookie.path + '</p>'); 
			// res.write('<p>domain: ' + sess.cookie.domain + '</p>');
			res.write('<p>secure: ' + sess.cookie.secure + '</p>');
		  res.end();
		  sess.views++;
		} else {
			sess.views = 1;
			res.end('welcome to the session demo. refresh!');
		}
	});

app.listen(3000);