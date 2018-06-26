var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOODB_URI || 3000);

module.exports = {mongoose};
