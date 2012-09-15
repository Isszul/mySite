/*
 * GET chat page.
 */
var linking = require('./linking');



exports.chat = function(req, res){
  res.render('chat', { 
    sidemenulinks: linking.getSideMenuLinks(req),
    title: 'Realtime Chat',
  });
};
