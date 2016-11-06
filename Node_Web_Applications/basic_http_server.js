var http = require('http');
var server = http.createServer(function(req, res) {
	var body = "Hello World";
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-type', 'text/plain');
	res.write(body);
	res.end();
});

server.listen(3000);