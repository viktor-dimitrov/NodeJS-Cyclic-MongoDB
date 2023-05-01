const Car = require('../models/car');


exports.create = (carData) => Car.create(carData);

exports.getAll = () => Car.find();