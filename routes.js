const router = require('express').Router();


const authController = require('./controllers/authController');
const carController = require('./controllers/carController');

router.use('/users', authController);
router.use('/data/cars', carController);

router.use('/details/:_id', carController);

router.use('/data/records', recordController);

module.exports = router;