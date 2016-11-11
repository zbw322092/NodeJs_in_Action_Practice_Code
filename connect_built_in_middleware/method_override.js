var connect = require('connect');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

function edit(req, res, next) {
	if ('GET' != req.method) return next();
	res.setHeader('Content-Type', 'text/html');
  res.write('<form method="post">');
  res.write('<input type="hidden" name="_method" value="put" />');
  res.write('<input type="text" name="user[name]" value="Tobi" />');
  res.write('<input type="submit" value="Update" />');
  res.write('</form>');
  res.end();
}

function update(req, res, next) {
	if ('PUT' != req.method) return next();
	res.end('Updated name to ' + req.body.user.name);
}

var app = connect()
	.use(morgan())
	.use(bodyParser())
	.use(methodOverride())
	.use(edit)
	.use(update)
	.listen(3000);
