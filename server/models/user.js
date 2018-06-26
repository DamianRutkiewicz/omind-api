var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    minlength: 6,
    required: true
  },
  password: {
    type: String,
    minlength:6,
    required: true
  }
})
