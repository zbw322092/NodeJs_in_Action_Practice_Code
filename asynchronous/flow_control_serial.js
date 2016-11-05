var flow = require('nimble');

// setTimeout(function() {
// 	console.log('I execute first');
// 	setTimeout(function() {
// 		console.log('I execute second');
// 		setTimeout(function() {
// 			console.log('I execute third');
// 		}, 1000);
// 	}, 2000);
// }, 1000);

flow.series([
	function(callback) {
		setTimeout(function() {
			console.log('I execute first');
			callback();
		}, 1000);
	},

	function(callback) {
		setTimeout(function() {
			console.log('I execute second');
			callback();
		}, 2000);
	},

	function(callback) {
		setTimeout(function() {
			console.log('I execute third');
			callback();
		}, 1000);
	}
]);