
/**
 * Module dependencies.
 */

var express = require('express'),
  linking = require('./routes/linking'),
  http = require('http'),
  path = require('path'),
  nowServerSide = require("./nowServerSide/nowServerSide.js");

var express = express();

var store  = new express.session.MemoryStore;


express.configure(function(){
  express.set('port', process.env.PORT || 3000);
  express.set('views', __dirname + '/views');
  express.set('view engine', 'jade');
  express.use(express.favicon());
  express.use(express.logger('dev'));
  express.use(express.bodyParser());
  express.use(express.methodOverride());
  express.use(express.cookieParser());
  express.use(express.session({ secret: 'Mdc8D8o3zzZDe__=1+2', store: store }));
  express.use(express.router);
  express.use(require('stylus').middleware(__dirname + '/public'));
  express.use(express.static(path.join(__dirname, 'public')));
});

express.configure('development', function(){
  express.use(express.errorHandler());
});



var links = linking.getAllLinks();
for (var i = 0; i < links.length; i++) {
  express.all(links[i].href, links[i].routingFunc);
};

var expressServer = http.createServer(express);

expressServer.listen(express.get('port'), function(){
  console.log("Express server listening on port " + express.get('port'));
});


nowServerSide.setupServerSideNowFunctions(expressServer);
