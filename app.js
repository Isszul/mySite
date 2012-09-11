
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , blog = require('./routes/blog')
  , vimrc = require('./routes/vimrc')
  , reload = require('./routes/reload')  
  , user = require('./routes/user')    
  , viewlog = require('./routes/viewlog')  
  , http = require('http')
  , path = require('path');

var app = express();

var store  = new express.session.MemoryStore;

var sidemenulinks =  [
  {name: 'Main Page', href: '/', routingFunc: routes.index},
  {name: 'My Blog', href: '/blog', routingFunc: blog.blog},
  {name: 'Vimrc', href: '/vimrc', routingFunc: vimrc.vimrc},
  {name: 'View Log', href: '/viewlog', routingFunc: viewlog.viewlog},
  {name: 'Reload from git', href: '/reload', routingFunc: reload.reload},
  {name: 'Login', href: '/login', routingFunc: user.login}
];


var additionallinks = [
  {name: 'Clear Log', href: '/clearlog', routingFunc:  viewlog.clearlog},
]


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('sidemenulinks', sidemenulinks);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'something', store: store }));
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


for (var i = 0; i < sidemenulinks.length; i++) {
  app.all(sidemenulinks[i].href, sidemenulinks[i].routingFunc);
};

for (var i = 0; i < additionallinks.length; i++) {
  app.all(additionallinks[i].href, additionallinks[i].routingFunc);
};

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
