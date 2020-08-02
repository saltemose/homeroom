const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema({
    messageID: {
        type: Schema.Types.ObjectId, ref: 'Message',
        required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
        type: String,
        required: true
    },
    dateCreated: {
      type: Date,
      default: Date.now
    }
  })

  Discussion = module.exports = mongoose.model('Discussion', DiscussionSchema);