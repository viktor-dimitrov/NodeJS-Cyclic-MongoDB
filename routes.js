const router = require('express').Router();


const authController = require('./controllers/authController');
const carController = require('./controllers/carController');
const recordController = require('./controllers/recordController');

router.use('/users', authController);
router.use('/data/cars', carController);
router.use('/details/:_id', carController);

router.use('/data/post', recordController);
router.use('/data/records', recordController);



module.exports = router;