/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
	sidemenulinks: res.app.settings['sidemenulinks'],  	
  	title: 'Main Page'
  });
};