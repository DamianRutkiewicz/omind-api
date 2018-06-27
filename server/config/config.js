var env = process.env.NODE_ENV || 'developmnent';
console.log("Environment : ",env);

if (env === 'developmnent') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oMind';

} else {
  process.env.PORT;
  process.env.MONGOODB_URI = 'mongodb://localhost:27017/oMind';
  // process.env.MONGODB_URI = 'mongodb://heroku_r9ssvj17:nvlcjbqbi34bt1sf4uohs5lhgk@ds121311.mlab.com:21311/heroku_r9ssvj17'
}
