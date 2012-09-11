var routes = require('./routes')
, exec = require('child_process').exec;



exports.runUpdate = function(req, res){

	exec('./update.sh &', 
		function(error, stdout, stderr) {
			console.log('Running update.sh');
	});

	routes.index(req, res);
	

}