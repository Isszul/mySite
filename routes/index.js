/*
 * GET home page.
 */
 
var linking = require('./linking');

exports.index = function(req, res){

  
  res.render('index', { 
    sidemenulinks: linking.getSideMenuLinks(req),
  	title: 'Main Page'
  });

};