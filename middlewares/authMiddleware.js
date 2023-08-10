
require('dotenv').config();
const SECRET = process.env.MONGO_URI;
const jwt = require('../lib/jsonwebtoken');
exports.authentication = async (req, res, next) => { 
    const token = req.headers['x-authorization'];
    if(token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
        }catch(error) {
            res.status(401).json({ error: error.message });
        }
    }
    next();
}


exports.isAuth = (req, res, next) => {
    
    if(!req.user){
        res.status(401).json({ error: "Unauthorizeddd" });
        return
    } else {
        next(); 
    }

   
} 
 
exports.isOwner = (req, res, next) => {

    if(!req.user || !req.params._userId || req.user._id !== req.params._userId){
        res.status(400).json({error: 'You are not author of this record!!!'});
        return
    } else {
        next();
    }
    
}