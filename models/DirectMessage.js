const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectMessageSchema = new Schema({
    participantA: {
        type: Schema.Types.ObjectId,
        required: true
    },
    participantB: {
        type: Schema.Types.ObjectId,
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

  DirectMessage = module.exports = mongoose.model('DirectMessage', DirectMessageSchema);