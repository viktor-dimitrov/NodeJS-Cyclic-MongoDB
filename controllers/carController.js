const router = require('express').Router();
const carManager = require('../managers/carManager');

router.get('/', (req, res) => {
    res.json({ok:true})
})

router.post('/post', async ( req, res) => {
    const carData = req

    const car = await carManager.create(carData);

    res.json(carData);


})
module.exports = router;