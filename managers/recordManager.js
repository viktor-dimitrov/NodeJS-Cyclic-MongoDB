const Record = require('../models/record');
const User = require('../models/user');




exports.getAll = async () => {

    const records = await Record.find().populate('_ownerId').lean();

    return records
} 

// exports.create = (recordData) =>  Record.create(recordData);

exports.create = async (data) => {
    try{
        const record = await Record.create(data);
        await User.findByIdAndUpdate(data._ownerId, {$push: {myPosts: record._id}});
        return record
        
    }catch(error){
        console.log(error)
        throw new Error((error.message).split(':')[2].split(',')[0]);
    }
}