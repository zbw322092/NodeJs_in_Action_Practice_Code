var connect = require('connect');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var app = connect()
	.use(serveIndex('./public'))
	.use(serveStatic('./public'))
	.listen(3000);