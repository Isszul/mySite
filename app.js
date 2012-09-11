
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , blog = require('./routes/blog')
  , vimrc = require('./routes/vimrc')
  , reload = require('./routes/reload')  
  , viewlog = require('./routes/viewlog')  
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.all('/', routes.index);
app.all('/blog', blog.blog);
app.all('/vimrc', vimrc.vimrc);
app.all('/reload', reload.reload);
app.all('/viewlog', viewlog.viewlog);
app.all('/clearlog', viewlog.clearlog);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
