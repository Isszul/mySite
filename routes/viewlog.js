/*
 * GET vimrc page.
 */

var fs = require('fs');

exports.viewlog = function(req, res){


	fs.readFile( 'nohup.out', function (err, data) {
	  if (err) {
	    throw err; 
	  }

	  res.render('viewlog', { 
  		title: 'Current nohup',
  		data: data
  	   });

	});


};



exports.clearlog = function(req, res){

	fs.unlink('nohup.out', function (err) {
  		if (err) throw err;
  		console.log('successfully deleted nohup.out');
	});

	res.render('viewlog', { 
		title: 'Current nohup',
		data: data
	});

};