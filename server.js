var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    routes     = require('./route/api-routes'),
    Firebase   = require('firebase'),
    firebseRef = new Firebase('https://momofuku.firebaseio.com/');

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  // to support JSON-encoded bodies
  app.use(bodyParser.json());
  // to support URL-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  routes(app,firebseRef);
    // Fire up server
  var server = app.listen(process.env.PORT || 5555, function() {
    console.log('Listening on port %d', server.address().port);
  });
