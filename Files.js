var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filesSchema = new mongoose.Schema({
	name: {type: String}
})

module.exports = mongoose.model('Files', filesSchema);