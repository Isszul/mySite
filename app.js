
/**
 * Module dependencies.
 */

var express = require('express'),
  linking = require('./routes/linking'),
  http = require('http'),
  path = require('path'),
  nowServerSide = require("./nowServerSide/nowServerSide.js");

var app = express();

var store  = new express.session.MemoryStore;


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'Mdc8D8o3zzZDe__=1+2', store: store }));
  app.use(express.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});



var links = linking.getAllLinks();
for (var i = 0; i < links.length; i++) {
  app.all(links[i].href, links[i].routingFunc);
};

var expressServer = http.createServer(app);

expressServer.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


nowServerSide.setupServerSideNowFunctions(expressServer);
