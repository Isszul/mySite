/*
 * Controls the application links
 */

  var index = require('./index'),
    blog = require('./blog'),
    vimrc = require('./vimrc'),
    reload = require('./reload'),
    chat = require('./chat'),
    user = require('./user'),   
    utils = require('./utils'),
    viewlog = require('./viewlog');

var sidemenulinks =  [
  {name: 'Main Page', href: '/', routingFunc: index.index},
  {name: 'My Blog', href: '/blog', routingFunc: blog.blog},
  {name: 'Chat', href: '/chat', routingFunc: chat.chat},
  {name: 'Vimrc', href: '/vimrc', routingFunc: vimrc.vimrc},
  {name: 'Login', href: '/login', routingFunc: user.login}
];

var onlyAdminLinks = [
  {name: 'View Log', href: '/viewlog', routingFunc: viewlog.viewlog},
  {name: 'View netstat', href: '/netstat', routingFunc: utils.netstat},  
  {name: 'View Disk Report', href: '/diskreport', routingFunc: utils.dfminush},  
  {name: 'Run command', href: '/runCommand', routingFunc: utils.runCommand},      
  {name: 'Reload from git', href: '/reload', routingFunc: reload.reload},
  {name: 'Logout', href: '/logout', routingFunc: user.logout},
];

var adminLinks = sidemenulinks.concat(onlyAdminLinks);

var nonVisibleLinks = [
  {name: 'Clear Log', href: '/clearlog', routingFunc:  viewlog.clearlog},
];
var allLinks = adminLinks.concat(nonVisibleLinks);



exports.getSideMenuLinks = function(req){
	if (req.session.loggedin == true){
		return adminLinks;
	}
	else{
		return sidemenulinks;
	}
};


exports.getAllLinks = function(){
	return allLinks;
};