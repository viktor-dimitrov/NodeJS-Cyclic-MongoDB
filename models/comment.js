const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    recordId: {
        type: String,
        required: true
    },
    text: {
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


const Record = mongoose.model('comment', commentSchema);

module.exports = Record;