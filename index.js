"use strict";
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var storeNameInst = require('./mongo');
var app = express();
app.use(express.static('public'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
//var greetedNames = {};
function storeValue(name, cb) {
  storeNameInst.storeName.findOne({
    name: name
  }, function(err, person) {
    console.log(person);
    //check if the person exist in the database, if not add the person
    if (err) {
      return err;
    } else if (!person) {
      console.log("nolo");
      var storingNamesGreeted = new storeNameInst.storeName({
        name: name,
        count: 1
      });
      storingNamesGreeted.save(cb)
    } else if (person) {
      cb(null, {
        name
      });
    }
  });
};
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  var name = req.body.name;
  res.render('index');
});
var counterFunction = function(req, res) {}
app.post('/greetings', function(req, res) {
  var name = req.body.name;
  var language = req.body.language;
  var message = '';
  if (language === 'english') {
    message = 'Hello , ' + name;
  } else if (language === 'afrikaans') {
    message = 'Hallo , ' + name;
  } else if (language === 'isixhosa') {
    message = 'Molo , ' + name;
  }
  storeValue(name, function() {
    storeNameInst.storeName.count({}, function(err, count) {
      if (err) {
        return err;
      } else {
        res.render('index', {
          greet: message,
          number: count
        })
      }
    });
  });
});
var counterFunction = function(req, res) {}
app.post('/reset', function(req, res) {
  storeNameInst.storeName.remove({}, function(err, remove) {
    if (err) {
      return err;
    }
    res.render('index')
  })
});
var port = process.env.PORT || 3000
var server = app.listen(port, function() {
  console.log("Started app on port : " + port)
})
