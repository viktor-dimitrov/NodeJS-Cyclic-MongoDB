const router = require('express').Router();
const carManager = require('../managers/carManager');

router.get('/', (req, res) => {
    res.json({ok:true})
})

router.post('/post', async ( req, res) => {
    const carData = {
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color
    }

    const car = await carManager.create(carData);

    res.json(carData);


})
module.exports = router;