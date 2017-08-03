var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/index', {
  useMongoClient: true
});

exports.storeName = mongoose.model('storeName', {
  count: Number,
  name: String
});
