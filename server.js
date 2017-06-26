//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
mongoose.connect('mongodb://imauri1:565632@ds117251.mlab.com:17251/tasker_connection');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/', require('./routes/api'), function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});


//Start server
app.listen(3000);
console.log('API is running on port 3000');