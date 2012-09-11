/*
 * GET vimrc page.
 */

var fs = require('fs');

exports.viewlog = function(req, res){


	fs.readFile( 'nohup.out', function (err, data) {

	  if (data == null)
	  {
	  	datafile = "Empty"
	  }
	  else
	  {
	  	datafile = data.toString();
	  }
	  res.render('viewlog', { 
		sidemenulinks: res.app.settings['sidemenulinks'],	  	
  		title: 'Current nohup',
  		data: datafile
  	   });

	});


};



exports.clearlog = function(req, res){

	fs.writeFile('nohup.out', '', function (err) {
  		console.log('successfully deleted nohup.out');
	});

	res.redirect('viewlog');

};