var connect = require('connect');
var cookieParser = require('cookie-parser');

var app = connect().
	use(function(req, res) {
		res.setHeader('Set-Cookie', 'foo=bar');
		res.setHeader('Set-Cookie', 'tobi=ferret; Expires=Tue, 08 Jun 2021 10:18:14 GMT');
		res.end();
	}).listen(3000);