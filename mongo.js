var mongoose = require('mongoose');
const mongoURL = "mongodb://nolo:nolo@ds117093.mlab.com:17093/web-applicaction";
mongoose.connect('mongoURL', {
  useMongoClient: true
});
exports.storeName = mongoose.model('storeName', {
  count: Number,
  name: String
 });
