const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    about: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    discussion: [String],
    author: {
        type: String,
        required: true
    },
    classID: {
        type: String,
        required: true
    },
    dateCreated: {
      type: Date,
      default: new Date()
    }
  })

  module.exports = Message = mongoose.model('Message', MessageSchema);