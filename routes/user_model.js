var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = mongoose.Schema({
	quote: String,
	person: String,
	source: String
});

module.exports = mongoose.model('Quote', quoteSchema);