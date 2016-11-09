var parse = require('url').parse;
module.exports = function route(obj) {
	return function(req, res, next) {
		// 首先检查一下request 的 method在router object中是否存在。
		if (!obj[req.method]) {
			next();
			return
		}
		var routes = obj[req.method];
		var url = parse(req.url);
		var paths = Object.keys(routes);

		for (var i = 0; i < paths.length; i++) {
			var path = paths[i];
			var fn = routes[path];
			path = path
				.replace(/\//g, '\\/')
				.replace(/:(\w+)/g, '([^\\/]+)');

			var re = new RegExp('^' + path + '$');
			var captures = url.pathname.match(re);

			if (captures) {
				var args = [req, res].concat(captures.slice(1));
				fn.apply(null, args);
				return;
			}
		}
		next();
	}
}
