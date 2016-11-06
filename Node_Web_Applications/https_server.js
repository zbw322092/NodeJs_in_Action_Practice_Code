var https = require('https');
var fs = require('fs');

var options = {
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./key-cert.pem')
};

// APIs of  https modules are almost the same with the APIs of http modules
https.createServer(options, function(req, res) {
	res.writeHead(200);
	res.end("Hello World\n");
}).listen(3000);