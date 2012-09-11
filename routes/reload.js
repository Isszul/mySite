/*
 * Kills the app (allows the bash script to cicle and reload)
 */


exports.reload = function(req, res){

  res.render('reload', { 
	sidemenulinks: res.app.settings['sidemenulinks'],  	
  	title: 'Reloading from GitHub'
  });

  process.exit(1);

}