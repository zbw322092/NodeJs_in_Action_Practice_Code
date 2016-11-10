var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
	.use(bodyParser())
	.use(function(req, res) {
		// res.end('Registered new user: ' + req.body.username);
		console.log(req.body);
		console.log(req.files);
		res.end('thanks!');
	}).listen(3000);
