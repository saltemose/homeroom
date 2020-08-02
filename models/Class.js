const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    users: [Schema.Types.ObjectId]
  })

  Class = module.exports = mongoose.model('Class', ClassSchema);