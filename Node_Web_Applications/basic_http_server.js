var http = require('http');
// var server = http.createServer(function(req, res) {
// 	var body = "Hello World";
// 	res.setHeader('Content-Length', body.length);
// 	res.setHeader('Content-type', 'text/plain');
// 	res.write(body);
// 	res.end();
// });

var server = http.createServer(function(req, res) {
	var url = "http://cn.bing.com/"
	var body = '<p>Redirecting to <a href="' + url + '">'
         + url + '</a></p>';
  res.setHeader('Location', url);
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-type', 'text/html');
	res.statusCode = 302;
	res.write(body);
	res.end();
});

server.listen(3000);