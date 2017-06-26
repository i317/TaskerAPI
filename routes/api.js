//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Tweet = require('../models/tweet');

//Routes
Tweet.methods(['get']);
Tweet.register(router, '/tweets');

//Return Router
module.exports = router;