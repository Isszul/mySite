/*
 * GET home page.
 */

exports.index = function(req, res){

  if (req.session.loggedin == true) {
  	console.log("loggedin")
  };
  
  res.render('index', { 
	sidemenulinks: res.app.settings['sidemenulinks'],  	
  	title: 'Main Page'
  });

};