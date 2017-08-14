var mongoose = require('mongoose');
const MongoURL =process.env.MONGO_DB_URL || "mongodb://localhost/greetings";
mongoose.connect(MongoURL, {
  useMongoClient: true
});
exports.storeName = mongoose.model('storeName', {
  count: Number,
  name: String
 });
