var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');

var Schema = mongoose.Schema;
var Tasks = new Schema({
	project: String,
	description: String
});

mongoose.model('Task', Tasks);

var Task = mongoose.model('Task');
var task = new Task();
task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';
task.save(function(err) {
	if (err) throw err;
	console.log('Task saved.');
});

Task.find({'project': 'Bikeshed'}, function(err, tasks) {
	for (var i = 0; i < tasks.length; i++) {
		console.log('ID:' + tasks[i]._id);
		console.log(tasks[i].description);
	}
});

Task.update(
	{_id: '5822c34a2d61a50e22e1c245'},
	{description: 'I do not want to paint bikeshed again.'},
	{multi: false},
	function(err, row_updated) {
		if (err) throw err;
		console.log('Updated.');
	}
)

Task.findById('5822c34a2d61a50e22e1c245', function(err, task) {
	// 注意，当这个internal id 没有的时候会报错
	task.remove();
});










