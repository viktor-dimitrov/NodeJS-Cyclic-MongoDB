const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../lib/constants');
 

exports.getUser = (email) => User.findOne({email});

exports.getUserData = async (userId) => {

    try{
        const user =   await User.findById(userId).lean();
        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            imageUrl: user.imageUrl,
            myPosts: user.myPosts
        }
    
        const token = await jwt.sign(payload, SECRET);

        const userData = {
            _id: user._id,
            accessToken: token,
           username: user.username,
            email: user.email,
            phone: user.phone,
            imageUrl: user.imageUrl,
            myPosts: user.myPosts
        }

        return userData;
    }catch(error){
        console.log(error)
        throw new Error((error.message));
    }
}

exports.regUser = async (data) => {
    const {username, email,  password, repassword, phone, imageUrl} = data;
   
    const user = await this.getUser(email);
    
    if(user){
        throw new Error ('Email is already registered!');
    }
    if( password != repassword){
        throw new Error('The repeat password should be equal to the password!');
    }
    if(password.length < 4){
        throw new Error('The password is required and should be at least 4 characters long!')
    }

    try{
        const hashPass = await bcrypt.hash(password, 5);
        const user = await User.create({username, email, phone, imageUrl, password: hashPass});
        
        const payload = {
            _id: user._id,
            username,
            email,
            phone,
            imageUrl,
            myPosts:[]
        }
    
        const token = await jwt.sign(payload, SECRET);

        const userData = {
            _id: user._id,
            accessToken: token,
            username,
            email,
            phone,
            imageUrl,
            myPosts:[]
        }

        
        return userData;
    }catch(error){
        console.log(error)
       throw new Error((error.message).split(':')[2].split(',')[0]);
    }
       
   
  
}

exports.logUser = async (data) => {

    const {email, password} = data;

    const user = await this.getUser(email);

    if(!user){
        throw new Error ('Invalid email or password!');
    }

     const passIsValid =  await bcrypt.compare(password, user.password);

     if(!passIsValid){
        throw new Error ('Invalid email or password!');
    }
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        imageUrl: user.imageUrl,
        myPosts: user.myPosts
    }

    const token = await jwt.sign(payload, SECRET);

    const userData = {
        _id: user._id,
        accessToken: token,
        username: user.username,
        email: user.email,
        phone: user.phone,
        imageUrl: user.imageUrl,
        myPosts: user.myPosts
    }

    return userData;
}


