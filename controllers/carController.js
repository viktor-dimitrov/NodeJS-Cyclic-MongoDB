const router = require('express').Router();
const carManager = require('../managers/carManager');
const bodyParser = require('body-parser')

router.get('/', async(req, res) => {

        const cars = await carManager.getAll();

        if(cars){
            res.json(cars);
        } else {
            res.send("Somthing went wrong.")
        }
    })


router.post('/', bodyParser,  async ( req, res) => {
    const carData = req.body

    // const car = await carManager.create(carData);
   

    res.json(carData);


})
module.exports = router;