var env = process.env.NODE_ENV || 'developmnent';
console.log("Environment : ",env);

if (env === 'developmnent') {
  process.env.PORT = 3000;
  process.env.MONGOODB_URI = 'mongodb://localhost:27017/oMind';
} else {
  process.env.PORT;
  process.env.MONGOODB_URI = 'mongodb://localhost:27017/oMind';
}
