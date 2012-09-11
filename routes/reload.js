/*
 * Updates the app. nodemon will reload for us.
 */

var exec = require('child_process').exec;

exports.reload = function(req, res){

  exec("git pull --update", function(error, stdout, stderr){

	  res.render('reload', { 
		sidemenulinks: res.app.settings['sidemenulinks'],  	
	  	title: 'Reloading from GitHub'
	  });

  });

}