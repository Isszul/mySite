/*
*	server side now functions.
*/
var nowjs = require('now');

exports.setupServerSideNowFunctions = function(app) {

	var everyone = nowjs.initialize(app);

	everyone.now.distributeMessage = function(message) {
		everyone.now.receiveMessage(this.now.name, message);
	};

};