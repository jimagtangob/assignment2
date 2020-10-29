var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.HTTP_PORT || 8080;
var http = require('http');
var server = http.Server(app);

// IE: http://localhost:8080/
app.get("/",(req,res) =>{
  res.send("<ul> <li><a href='/assignment2' > Home Page </a></li> </br> <li><a href='/Homepage' > Home Page </a></li> </br> <li><a href='/Roomlisting'> Room Listing Page </a> </li> </br> <li><a href='/registration'>Registration Page </a> </li></ul></br>");
  res.render("assignment2");
});

app.get("/Homepage", function(req,res){
  res.sendFile(path.join(__dirname,"/views/Homepage.html"));
});

app.get("/Roomlisting", function(req,res){
  res.sendFile(path.join(__dirname,"/views/Roomlisting.html"));
});


app.get("/registration", function(req,res){
  res.sendFile(path.join(__dirname,"/views/registration.html"));
});

function onHttpStart() {
  console.log("Running: " + HTTP_PORT);
}

function validate() {
  var firstName = document.getElementById('fName').value.trim();
  var lastName = document.getElementById('lName').value.trim();
  var email = document.getElementById('email').value.trim();
  var address = document.getElementById('address').value.trim();
  var password = document.getElementById('password').value.trim();
  return true;
}

app.listen(HTTP_PORT, onHttpStart);
