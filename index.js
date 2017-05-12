var express = require('express');
var app = express();
var server = app.listen(3000);
var greeted =[];
app.get('/greetings/:name', function(req, res){
  res.send('Hello, ' +req.params.name);
  greeted.push(req.params.name);
  console.log(req.params.name);
});
  app.get('/greeted', function(req, res){
    res.send(greeted);
    console.log(greeted);
  });
app.get('/counter/:user_name', function(req, res){
  var user = req.params.user_name;
  var counterMap ={};
  for(i=0; i<greeted.length; i++){
    var loop = greeted[i];
    counterMap[loop]=counterMap[loop] ? counterMap[loop]+1:1;
  }
res.send('Hello, ' + user + ' has been greeted ' + counterMap[loop] +' times');

})
