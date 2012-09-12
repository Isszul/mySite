/*
 * GET vimrc page.
 */

var fs = require('fs')
, linking = require('./linking');


exports.vimrc = function(req, res){


	fs.readFile( './public/resources/.vimrc', function (err, data) {
	  if (err) {
	    throw err; 
	  }

	  res.render('vimrc', { 
	    sidemenulinks: linking.getSideMenuLinks(req),	  	
  		title: 'My vimrc settings',
  		data: data
  	   });

	});


};