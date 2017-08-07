var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/index', {
  useMongoClient: true
});

const mongoURL = process.env.MONGO_DB_URL || "'mongodb://localhost/index'";

mongoose.connect(mongoURL);


// exports.storeName = mongoose.model('storeName', {
//   count: Number,
//   name: String
// });
