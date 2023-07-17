const router = require('express').Router();
const authManager = require('../managers/authManager');

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




module.exports = router;