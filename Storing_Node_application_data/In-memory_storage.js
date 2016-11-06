var http = require('http');
var counter = 0; // using variable to store data

var server = http.createServer(function(req, res) {
	counter++;
	res.write('I have been accessed ' + counter + ' times.');
	res.end();
});

server.listen(8000);