var express = require('express');
var res = express.response;

res.message = function(meg, type) {
	type = type || 'info';
	var sess = this.req.session;
	sess.messages = sess.messages || [];
	sess.messages.push({ type: type, string: msg });
};

res.error = function(meg) {
	return this.message(msg, 'error');
}

module.exports = function(req, res, next) {
	res.locals.messages = req.session.messages || [];
	res.locals.removeMessages = function() {
		req.session.messages = [];
	};
	next();
};