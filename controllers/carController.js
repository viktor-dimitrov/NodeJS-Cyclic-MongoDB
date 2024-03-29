const router = require('express').Router();
const carManager = require('../managers/carManager');
const { carFilter } = require('../lib/utils/filterFactory');


router.get('/', async (req, res) => {

    const filterArray = carFilter(req.query);

    try {
        const cars = await carManager.getAll(filterArray);
        res.status(200).json(cars);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/', async (req, res) => {

    try {
        const carData = { model, brand, year, fuel, mileage, imageUrl, engine, color } = req.body;
        const _ownerId = req.user._id;
        const timestamp = Date.now();
        const car = await carManager.create({ ...carData, _ownerId, '_createdOn': timestamp });
        res.json(car);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }


})
module.exports = router;