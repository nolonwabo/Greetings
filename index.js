"use strict";
var countNamesGreeted = 0;
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
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

app.get('/greetings', function(req, res) {
  var name = req.body.name;
  res.render('index');
});
var count = 0;
app.post('/greetings', function(req, res) {
  var name = req.body.name;
  var language = req.body.language;
  var message = '';
  if (language === 'english') {
    message = 'Hello , ' + name;
    count++;
  } else if (language === 'afrikaans') {
    message = 'Hallo , ' + name;
    count++;
  } else if (language === 'isixhosa') {
    message = 'Hello , ' + name;
    count++;
  }

  res.render('index', {
    greet: message,
    number: count
  })
});



var server = app.listen( process.env.PORT || 3000);
