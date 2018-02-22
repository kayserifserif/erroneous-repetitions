var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');
var Quote = require('./user_model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	// mongoose.connect('mongodb://myTester:xyz123@localhost:27017/mydb');
	mongoose.connect(process.env.MONGODB_URI);
	mongoose.Promise = global.Promise;
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	db.once('open', function() {
		Quote.find(function(err, quotes) {
			if (err) {
				return console.error(err);
			} else {
				res.render('index', {title: 'Erroneous Repetitions', quotes: quotes});
			}
		});
	});
});

module.exports = router;
