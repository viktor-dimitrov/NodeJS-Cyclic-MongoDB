const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const recordSchema = new Schema ({
    _ownerId: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
  },
      artist: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },

      imageUrl: {
        type: String,
        required: true
      },
      style: {
        type: String,
        required: true
      },
      
      _createdOn: {
        type: Number,
        required: true
      },
      _updatedOn: {
        type: Number,
        required: false
      }

    });


const Record = mongoose.model('record', recordSchema);

module.exports = Record;