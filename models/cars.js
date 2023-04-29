const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const carSchema = new Schema ({
    brand: {
        type: String,
     
    },
    model: {
        type: String,
      
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car