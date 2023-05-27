const Car = require('../models/car');




exports.getAll = async (carId) => {

    let filter = {}; 

    if (carId !== null) {
      filter._id = carId; 
    }

    const cars = await Car.find(filter);

    return cars
} 



exports.create = (carData) =>  Car.create(carData);