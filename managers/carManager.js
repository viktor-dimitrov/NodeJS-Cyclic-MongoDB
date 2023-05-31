const Car = require('../models/car');




exports.getAll = async (filterArray) => {

let expressions = null;
  if (filterArray.length > 0) {
    expressions = {$and: filterArray};
  }
    const cars = await Car.find(expressions).populate('_ownerId').lean();

    cars[0].dealer = {
      _id: cars[0]['_ownerId']._id,
      username: cars[0]['_ownerId'].username,
      email: cars[0]['_ownerId'].email,
      imageUrl:cars[0]['_ownerId'].imageUrl,
      phone: cars[0]['_ownerId'].phone
    }

    cars[0]._ownerId = null;

    return cars
} 



exports.create = (carData) =>  Car.create(carData);