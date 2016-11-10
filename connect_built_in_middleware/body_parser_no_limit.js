var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
	.use(bodyParser.json({limit: '32kb'}))
	.listen(3000);