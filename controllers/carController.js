const router = require('express').Router();
const carManager = require('../managers/carManager');

router.get('/', async(req, res) => {

        const cars = await carManager.getAll();

        if(cars){
            res.json(cars);
        } else {
            res.send("Somthing went wrong.")
        }
    })


router.post('/', async ( req, res) => {
    const carData = req.payload;
   

    const car = await carManager.create(carData);
   

    res.json(carData);


})
module.exports = router;