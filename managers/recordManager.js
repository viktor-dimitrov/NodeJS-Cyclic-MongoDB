const Record = require('../models/record');
const User = require('../models/user');




exports.getAll = async () => {

    const records = await Record.find().populate('_ownerId').lean();
    return records
} 


exports.getOne = async (recordId) => {
    try{
        const record =  await Record.findById(recordId).populate('_ownerId').lean()
        return record
    }catch(error){
        console.log(error)
        throw new Error((error.message));
    }
}

exports.createRecord = async (data) => {
    try{
        const record = await Record.create(data);
        await User.findByIdAndUpdate(data._ownerId, {$push: {myPosts: record._id}});
        return record
        
    }catch(error){
        console.log(error);
        throw new Error((error.message));
    }
}


exports.deleteRecord = async (recordId, userId) => {
    try {
        const deletedRecord = await Record.findByIdAndDelete(recordId);
        await User.findByIdAndUpdate(userId, { $pull: { myPosts: recordId } })
        return deletedRecord

    } catch (error) {
        console.log(error);
        throw new Error((error.message));
    }
}

exports.editRecord = async (recordId, data) => {
    try{
       return await Record.findByIdAndUpdate(recordId, data, {runValidators: true})
      
    }catch(error){
        console.log(error);
        throw new Error((error.message));
    }
}

