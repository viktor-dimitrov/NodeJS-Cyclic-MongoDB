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
        return res.status(400);
    }
    

})


router.post('/login', async (req, res) => {

    const data = req.body;
    
    try{
      const user = await authManager.logUser(data);
      res.cookie('auth', user);
      res.send(JSON.stringify(user));
    }catch(error){
        console.log(JSON.parse(error))
        return res.send(error.error); 
    }
    
} )




module.exports = router;