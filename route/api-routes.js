var _ = require('lodash');

module.exports = function(app,firebaseRef){
  app.get('/api/v1/cities', function(req, res) {
    var citiesRef = firebaseRef.child('cities');
    var results = [];

    citiesRef.once('value', function(snap) {
      _.each(snap.val(), function(city, cityId) {
        city.id = cityId;
        results.push(city);
      });
      res.status(200).json(results);
    }, function(err) {
      res.status(500).json(err);
    });
  });
};