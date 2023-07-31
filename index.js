const express = require("express");
const bodyParser = require("body-parser");
const App = express();

App.use(bodyParser.urlencoded({ extended: true }));

App.get("/", function(req,res){
  // res.send("<h1>Hello World</h1>"); 
  res.sendFile(__dirname + "/index.html"); 
});

App.get("/About", function(req,res){
  res.send("sawera"); 
});
App.post("/", function(req,res){
  var t1 = Number(req.body.n1);
  var t2 = Number(req.body.n2);
  var result = t1 + t2;
  res.send("The result of the calculation is : " + result);
});
App.listen(3000, function() {
  console.log("Server has started on port 3000");
});
