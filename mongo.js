var mongoose = require('mongoose');
const MongoURL =process.env.MONGO_DB_URL || "mongodb://nolo:nolo@ds117093.mlab.com:17093/web-applicaction";
mongoose.connect(MongoURL, {
  useMongoClient: true
});
exports.storeName = mongoose.model('storeName', {
  count: Number,
  name: String
 });
