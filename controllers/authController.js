const router = require('express').Router();
const authManager = require('../managers/authManager');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', async (req, res) => {
    const data = req.body;

    try{
        const user = await authManager.regUser(data);
      
        res.cookie('auth', user);
        res.send(JSON.stringify(user));
    }catch(error){
        console.log(error)
        res.status(400).json({ error: error.message })
    }
    

})


router.post('/login', async (req, res) => {

    const data = req.body;
    
    try{
      const user = await authManager.logUser(data);
      res.cookie('auth', user);
      res.send(JSON.stringify(user));
    }catch(error){
        console.log(error)
        res.status(400).json({ error: error.message })
    }
    
} )

router.get('/me', authMiddleware.isAuth, async (req, res) => {
    try{
        const userData = await authManager.getUserData(req.user._id);
        res.send(JSON.stringify(userData));

    }catch(error){
        console.log(error)
        throw new Error((error.message));
    }
})




module.exports = router;