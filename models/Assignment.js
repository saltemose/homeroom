const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    classID: {
        type: String,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: Text,
      required: true
    },
    content: {
      type: File,
    },
    dateDue: {
      type: Date,
      required: true
    },
    dateCreated: {
      type: Date,
      default: Date.now
    }
  })

  Assignment = module.exports = mongoose.model('Assignment', AssignmentSchema);