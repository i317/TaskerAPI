//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var tweetSchema = new mongoose.Schema({
	taskID: Number,
	question: String,
	tweet: String,
	input: String,
	correctAnswer: Number
});

//Return model
module.exports = restful.model('Tweets', tweetSchema);