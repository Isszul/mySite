/*
 * Kills the app (allows the bash script to cicle and reload)
 */

var process = requires('process');

exports.runUpdate = function(req, res){

  res.render('reload', { 
  	title: 'Reloading from GitHub'
  });

  process.exit(1);

}