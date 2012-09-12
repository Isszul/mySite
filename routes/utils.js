/*
 * util page functions
 */

var exec = require('child_process').exec
, linking = require('./linking');

exports.netstat = function(req, res){

  exec("netstat -t", function(error, stdout, stderr){

  	  console.log("stdout: " + stdout);
  	  console.log("stderr: " + stderr);

	  res.render('viewfile', { 
	    sidemenulinks: linking.getSideMenuLinks(req),	  	
  		title: 'Netstat -t',
  		data: "stdout: " + stdout + "stderr: " + stderr
  	   });

  });

}