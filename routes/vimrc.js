/*
 * GET vimrc page.
 */

var fs = require('fs');

exports.vimrc = function(req, res){


	fs.readFile( './public/resources/.vimrc', function (err, data) {
	  if (err) {
	    throw err; 
	  }

	  res.render('vimrc', { 
		sidemenulinks: res.app.settings['sidemenulinks'],	  	
  		title: 'My vimrc settings',
  		data: data
  	   });

	});


};