const Record = require('../models/record');




exports.getAll = async (filterArray) => {

let expressions = null;
  if (filterArray.length > 0) {
    expressions = {$and: filterArray};
  }
    const records = await Record.find(expressions).populate('_ownerId').lean();

    return records
} 



exports.create = (recordData) =>  Record.create(recordData);