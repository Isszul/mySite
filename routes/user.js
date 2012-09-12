// User functions

var linking = require('./linking');

exports.login = function(req, res){

	if(req.body.username=='user' && req.body.password=='pass'){
		req.session.loggedin=true;
	}

	res.render('login', { 
    	sidemenulinks: linking.getSideMenuLinks(req),  	
		title: 'Login',
	});


};


exports.logout = function(req, res){

	if(req.session.loggedin==true){
		req.session.loggedin=false;
	}

	res.redirect('/');

};