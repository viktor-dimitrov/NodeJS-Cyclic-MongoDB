const Record = require('../models/record');




exports.getAll = async () => {

    const records = await Record.find().populate('_ownerId').lean();

    return records
} 



exports.create = (recordData) =>  Record.create(recordData);