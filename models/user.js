const mongoose = require('mongoose');
// const validators = require('mongoose-validators');




const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'The username is required!'],
        minLength: [2, 'The username should be at least 2 characters long!'],
        maxLength: [10, 'The username should be 10 characters max long!']

    },
 

    email: {
        type: String,
        required: [true,'The email is required!'],
        minLength: [10, 'The email should be at least 10 characters long!']

    },

      password: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: false
      },
  
      imageUrl: {
        type: String,
        required: false
      },
      

    myPosts:[ {
        type: mongoose.Types.ObjectId,
        ref: 'record'
    }],


});

const User = mongoose.model('user', userSchema);

module.exports = User;
