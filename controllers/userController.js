const router = require('express').Router();
const authManager = require('../managers/authManager');

router.post('/register', async (req, res) => {
    const {username, email,  password, repassword} = req.body;
    const token = await authManager(username, email,  password, repassword);

})


router.post('/login', async (req, res) => {



} )




module.exports = router;