const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime()
  },
  children: {
    type: Array,
    default: [],
  },
  parent: {
    type: Boolean,
    required: true
  },
  posX: {
    type: Number,
    default: 0
  },
  posY: {
    type: Number,
    default: 0
  },
  sub: {
    type: Array,
    default: [
      {type: 'button'},
      {type: 'button'},
      {type: 'button'},
      {type: 'button'},
    ]
  }
})

module.exports = {Task};
