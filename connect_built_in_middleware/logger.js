var connect = require('connect');
var morgan = require('morgan');
var fs = require('fs');

var log = fs.createWriteStream('/var/log/myapp.log', { flags: 'a', immediate: true });

var app = connect()
	.use(morgan('dev', {stream: log}))
	.use(hello)
	.listen(3000);

function hello(req, res) {
	res.setHeader('Content-Type', 'application/plain');
	res.end('Hello');
}