const router = require('express').Router();
const carManager = require('../managers/carManager');


router.get('/', async(req, res) => {

    // if (req.query != {}){
    //     console.log('-------------')
    //     console.log(req.query)
    // }


    const where = req.query.where;
    const load = req.query.load;
    let filter = null;
    let ownerId = null;

    if(where && where.includes('_id')){
        filter = {
            _id: where.slice(5, 29),
        }
    }else if(where && where.includes('_ownerId')){
        filter = {
            _ownerId: where.slice(10, 34),
        }
    }


    try{
        const cars = await carManager.getAll(filter);

        //  console.log(cars)
    
        res.status(200).json(cars);
    }catch(error){
        res.status(400).json({ error: error.message });
    }
    })




router.post('/', async ( req, res) => {

    try{
        const carData = {model, brand, year, fuel, mileage, imageUrl, engine, color} = req.body; 
        const _ownerId = req.user._id;
        const timestamp = Date.now();
        const car = await carManager.create({...carData, _ownerId, '_createdOn': timestamp});
        res.json(car);
    }catch(error){
        console.error(error);
        res.status(400).json({ error: error.message });
    }


})
module.exports = router;