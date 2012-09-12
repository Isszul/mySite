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

	  res.render('viewfile', { 
	    sidemenulinks: linking.getSideMenuLinks(req),	  	
  		title: 'Vimrc settings file. Borrowed from Derek Wyatt! (derekwyatt.org)',
  		data: data
  	   });

	});


};