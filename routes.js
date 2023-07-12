const router = require('express').Router();


const authController = require('./controllers/authController');
const carController = require('./controllers/carController');

router.use('/users', authController);
router.use('/data/cars', carController);
router.use('/data/records', recordController);
router.use('/details/:_id', carController);

module.exports = router;