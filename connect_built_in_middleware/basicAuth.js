var connect = require('connect');
var auth = require('basic-auth');

var app = connect()
	.use(function(req, res) {
		var credentials = auth(req);
	  if (!credentials || credentials.name !== 'Bowen' || credentials.pass !== 'secret666') {
	    res.statusCode = 401
	    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
	    res.end('Access denied')
	  } else {
	    res.end('Access granted')
	  }
  });

app.listen(3000);