const Comment = require('../models/comment');



exports.getAllById = async (recordId) => {

    console.log(recordId)
    const comments = await Comment.find({recordId: recordId}).populate('_ownerId', '-password').lean();
    return comments
} 


exports.getOne = async (commentId) => {
    try{
        const comment =  await Record.findById(commentId).populate('_ownerId', '-password').lean()
        return comment
    }catch(error){
        console.log(error)
        throw new Error((error.message));
    }
}

exports.createComment = async (data) => {
    try{
        const comment = await Comment.create(data);

        return comment
        
    }catch(error){
        console.log(error);
        throw new Error((error.message));
    }
}


exports.deleteComment = async (commentId, userId) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
      
        return deletedComment

    } catch (error) {
        console.log(error);
        throw new Error((error.message));
    }
}

exports.editComment = async (commentId, data) => {
    try{
       return await Comment.findByIdAndUpdate(commentId, data, {runValidators: true})
      
    }catch(error){
        console.log(error);
        throw new Error((error.message));
    }
}