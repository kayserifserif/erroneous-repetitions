var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// mongoose.connect('mongodb://localhost/mydb');
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//   var quoteSchema = mongoose.Schema({
//     quote: String,
//     person: String,
//     source: String
//   });
//   var Quote = mongoose.model('Quote', quoteSchema);
//   Quote.find(function(err, quotes) {
//     if (err) return console.error(err);
//     console.log(quotes);
//   });
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');

  // var MongoClient = require('mongodb').MongoClient;
  // var url = 'mongodb://localhost:27017/mydb';

  // MongoClient.connect(url, function(err, db) {
    // if (err) {
    //   console.log("Unable to connect to the server", err);
    // } else {
    //   console.log("Connection established to", url);
    //   var collection = db.quotes;
    //   collection.find().toArray(function(err, quotesResult) {
    //     if (err) {
    //       res.send(err);
    //     } else if (quotesResult.length) {
    //       res.render('quotesList', {
    //         'quotesList': quotesResult,
    //       });
    //     } else {
    //       res.send('No documents found.');
    //     }
    //   });
    //   db.close();
    // }
    // if (err) throw err;
    // db.quotes.findOne({}, function(err, result) {
      // if (err) throw err;
      // console.log(result.quote);
      // db.close();
    // });
    // console.log(db.collection('quotes').aggregate([{$sample: {size: 1}}]));
  // });

});

module.exports = app;
