//jshint esversion:6

// Start Using Environment Variables to Keep Secret Safe like API address in app.js
require('dotenv').config();
// End Using Environment Variables to Keep Secret Safe like API address in app.js

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

///Email note only
//const nodemailer = require("nodemailer");
///End Email note only

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home")
});
app.get("/McCafe", function(req,res){
  res.render("McCafe")
});
app.get("/about", function(req,res){
  res.render("about")
});
app.get("/deals", function(req,res){
  res.render("deals")
});
app.get("/trending", function(req,res){
  res.render("trending")
});
app.get("/contact", function(req,res){
  res.render("contact")
});
app.post("/contact", function(req, res){
  res.redirect('/success')
});
app.get("/success", function(req,res){
  res.render("success")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});