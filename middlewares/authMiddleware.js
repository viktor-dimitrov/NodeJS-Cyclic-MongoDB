const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../lib/constants');

exports.authentication = async (req, res, next) => { 
    const token = req.headers['x-authorization'];
    if(token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
        }catch(error) {
            res.status(400).json({ error: error.message });
        }
    }
    next();
}


exports.isAuth = (req, res, next) => {
    if(!req.user){
        res.status(400)
    }

    next();
}
 
exports.isOwner = (req, res, next) => {

    if(req.user._id != (req.params._ownerId)){
    
        res.status(400)
    }
    next();
}