/*
*	server side now functions.
*/
var nowjs = require('now'),
	exec = require('child_process').exec;

exports.setupServerSideNowFunctions = function(app) {

	var everyone = nowjs.initialize(app);

	everyone.now.distributeMessage = function(message) {
		console.log("got message: " + message);
		everyone.now.receiveMessage(this.now.name, message);
	};


	everyone.now.runConsoleCommand = function(command) {
		console.log("running command: " + command);
		everyone.now.receiveCommand("running command: " + command);
		
		/*	exec(command, function(error, stdout, stderr){
			everyone.now.receiveCommand( "error: " + error + " <br /> stdout: " + stdout + "<br /> stderr: " + stderr); 
		});*/
	};

};