/*
 * Kills the app (allows the bash script to cicle and reload)
 */

var process = require('process');

exports.runUpdate = function(req, res){

  res.render('reload', { 
  	title: 'Reloading from GitHub'
  });

  process.exit(1);

}