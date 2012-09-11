/*
 * Updates the app. nodemon will reload for us.
 */

var exec = require('child_process').exec;

exports.reload = function(req, res){

  exec("git pull --update", function(error, stdout, stderr){

  	  console.log(stdout);
  	  console.log(stderr);
	  res.redirect('/');

  });

}