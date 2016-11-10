var connect = require('connect');
var qs = require('qs');

var app = connect()
	.use(qs.parse())
	.use(function(req, res, next) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(req.query));
	}).
	listen(3000);