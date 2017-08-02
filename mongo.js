var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/index');

var Storename = mongoose.model('Storename', { count: Number, name: String });

 module.exports = Storename;
