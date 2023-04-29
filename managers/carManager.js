const Car = require('../models/cars');


exports.create = (carData) => Car.create(carData);

exports.getAll = () => Car.find();