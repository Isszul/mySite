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

};


exports.dfminush = function(req, res){

  exec("df -h", function(error, stdout, stderr){

  	  console.log("stdout: " + stdout);
  	  console.log("stderr: " + stderr);

	  res.render('viewfile', { 
	    sidemenulinks: linking.getSideMenuLinks(req),	  	
  		title: 'Disk report',
  		data: "stdout: " + stdout + "stderr: " + stderr
  	   });

  });

};



exports.top = function(req, res){

  exec("top -n 1", function(error, stdout, stderr){

      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);

    res.render('viewfile', { 
      sidemenulinks: linking.getSideMenuLinks(req),     
      title: 'Disk report',
      data: "stdout: " + stdout + "stderr: " + stderr
       });

  });

};
