var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('./user_model.js');

// var str = ''

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
	    	// console.log(quotes);
	    	res.render('index', {quotes: quotes});
	    }
	  });
	});
	// var MongoClient = require('mongodb').MongoClient;
	// var url = 'mongodb://localhost:27017/mydb';
	// var results = [];
	// MongoClient.connect(url, function(err, db) {
		// db.quotes.find(function(err, quotes) {
			// if (err) res.send(err);
			// res.render('index', {quotes: quotes});
		// });
		// if (err) throw err;
		// db.quotes.find().toArray(function(err, docs) {
			// console.log(docs[0]);
			// db.close();
		// });
		// console.log(db.quotes.find());
		// var str = db.quotes.find();
		// str.each(function(err, doc) {
		// 	console.log(doc);
		// 	results.push(doc);
		// });
	// });
	// res.render('index', { title: 'Erroneous Repetitions', 'results': results });
	// res.render('index', { 'results': results });
	// res.render('index');
});

module.exports = router;
