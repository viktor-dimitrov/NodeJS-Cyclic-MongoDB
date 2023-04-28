const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const carSchema = new Schema ({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car