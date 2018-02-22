var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('./user_model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	mongoose.connect('mongodb://localhost/mydb');
	mongoose.Promise = global.Promise;
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
	db.once('open', function() {
		Quote.find(function(err, quotes) {
			if (err) {
				return console.error(err);
			} else {
				res.render('index', {quotes: quotes});
			}
		});
	});
});

module.exports = router;
