const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const carSchema = new Schema ({
    _ownerId: {
      type: mongoose.Types.ObjectId,
      ref: 'user',

  },
      model: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      fuel: {
        type: String,
        required: true
      },
      engine: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      mileage: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      brand: {
        type: String,
        required: true
      },
      _createdOn: {
        type: Number,
        required: true
      },

    });


const Car = mongoose.model('Car', carSchema);

module.exports = Car