const Record = require('../models/record');
const User = require('../models/user');




exports.getAll = async () => {

    const records = await Record.find().populate('_ownerId').lean();
    return records
} 


exports.getOne = async (recordId) => {
    try{
        console.log(recordId)
        const record =  await Record.findById(recordId)
        return record
    }catch(error){
        console.log(error)
        throw new Error((error.message));
    }
}

exports.create = async (data) => {
    try{
        const record = await Record.create(data);
        await User.findByIdAndUpdate(data._ownerId, {$push: {myPosts: record._id}});
        return record
        
    }catch(error){
        console.log(error)
        throw new Error((error.message));
    }
}