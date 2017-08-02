"use strict";
var countNamesGreeted = 0;
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var Storename = require('./mongo');
var app = express();
app.use(express.static('public'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  var name = req.body.name;
  res.render('index');
});
var count = 0;
var namesGretted =[];
app.post('/greetings', function(req, res) {
  var name = req.body.name;
  var language = req.body.language;
  var message = '';
  if (language === 'english') {
    message = 'Hello , ' + name;
    count++;
    Storename.create({
      name: name,
      count: count
    });
  } else if (language === 'afrikaans') {
    message = 'Hallo , ' + name;
    count++;
    Storename.create({
      name: name,
      count: count
    });
  } else if (language === 'isixhosa') {
    message = 'Molo , ' + name;
    count++;
    Storename.create({
      name: name,
      count: count
    });
  }

  res.render('index', {
    greet: message,
    number: count
  })
});

var port = process.env.PORT || 3000
var server = app.listen(port, function(){
  console.log("Started app on port : " + port)
});
