var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', function() {
	console.log('Error ' + err);
});

// redis.print print out the result of the operation or error
client.set('color', 'red', redis.print);
client.get('color', function(err, value) {
	if (err) throw err;
	console.log('Got: ' + value);
});

client.hmset('camping', {
	'shelter': '2-person tent',
	'cooking': 'campstove'
}, redis.print);

client.hget('camping', 'cooking', function(err, value) {
	if (err) throw err;
	console.log('Will be cooking with: ' + value);
});

client.hkeys('camping', function(err, keys) {
	if (err) throw err;
	keys.forEach(function(key, i) {
		console.log(' ' + key);
	});
});

































