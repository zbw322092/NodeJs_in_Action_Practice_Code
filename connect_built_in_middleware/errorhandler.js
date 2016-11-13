var connect = require('connect');
var errorhandler = require('errorhandler');

var app = connect()
	.use(function(req, res, next) {
		setTimeout(function () {
       next(new Error('something broke!'));
		}, 500);
	})
	.use(errorhandler())
	.listen(3000);