"use strict";
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var server = app.listen(3000);
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

// how to greet a user
//function createMessage(language, name){

//}

// how many times a user has been greeted
//function counterForName(name){

//}

app.post('/greetings', function(req, res) {
  var name = req.body.name;
  var language = req.body.language;

  // the counter
//  const counter = counterForName(name);

  // the Message
  //const message = createMessage(language, name);

//  res.render('index' , {
  //  counter : counter,
   //message : message
//  });

   if (language === 'english') {
  res.render('index', {
       greet: 'Hello, ' + name
    });

  } else if (language === 'afrikaans') {
     res.render('index', {
       greet: 'Hallo, ' + name
   })
  } else if (language === 'isixhosa') {
    res.render('index', {
       greet: 'Molo, ' + name
     })
   }

});




//var greeted =[];
//app.get('/greetings/:name', function(req, res){
//res.send('Hello, ' +req.params.name);
//  greeted.push(req.params.name);
//  console.log(req.params.name);
//});
//  app.get('/greeted', function(req, res){
//  res.send(greeted);
//console.log(greeted);
//});
//app.get('/counter/:user_name', function(req, res){
//var user = req.params.user_name;
//var counterMap ={}
//for(i=0; i<greeted.length; i++){
//var loop = greeted[i];
//if (user===loop) {
//  counterMap[loop]=counterMap[loop] ? counterMap[loop]+1:1;
//  }
//}
//res.send('Hello, ' + user + ' has been greeted ' + counterMap[user] +' time(s)');

//})
