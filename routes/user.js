// User functions


exports.login = function(req, res){

	if(req.body.username=='user' && req.body.password=='pass'){
		req.session.loggedin=true;
	}


	res.render('login', { 
		sidemenulinks: res.app.settings['sidemenulinks'],	  	
		title: 'Login',
	});


};