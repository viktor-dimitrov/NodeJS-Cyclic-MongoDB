const router = require('express').Router();
const authManager = require('../managers/authManager');

router.post('/register', async (req, res) => {
    const data = req.body;

    try{
        const token = await authManager.regUser(data);
        res.cookie('auth', token);
        res.send(token)
    }catch(error){
        console.log(error)
        return res.status(400);

    }
    

})


router.post('/login', async (req, res) => {



} )




module.exports = router;