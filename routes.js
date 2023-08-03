const router = require('express').Router();


const authController = require('./controllers/authController');
const carController = require('./controllers/carController');
const recordController = require('./controllers/recordController');
const commentController = require('./controllers/commentControler')

router.use('/users', authController);

router.use('/data/cars', carController);
router.use('/details/:_id', carController);

router.use('/data/records', recordController);
 
router.use('/data/comments', commentController)

module.exports = router;