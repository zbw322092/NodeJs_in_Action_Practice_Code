var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
	.use(bodyParser.json())
	.listen(3000);