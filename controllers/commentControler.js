const router = require('express').Router();
const commentManager = require('../managers/commentManager');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:recordId', async (req, res) => {

    const recordId = req.params.recordId

    try {
        const comments = await commentManager.getAllById(recordId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/', authMiddleware.isAuth, async (req, res) => {

    try {
        const commentData = { recordId, text } = req.body;
     
        const _ownerId = req.user._id;
        const timestamp = Date.now();
        const comment = await commentManager.createComment({ ...commentData, _ownerId, '_createdOn': timestamp });
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
})


router.delete('/:_id/delete/:_userId' , authMiddleware.isAuth, authMiddleware.isOwner, async (req, res) => {

    const commentId = req.params._id;
    const userId = req.user._id;
    let ownerId = null;

    if(commentId){
        try{
           const comment = await commentManager.getOne(commentId);
           ownerId = comment._ownerId._id.toString();
        }catch(error){
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    }

    if(userId === ownerId) {
       
        try{
            const deletedComment = await commentManager.deleteComment(commentId, userId);
            res.status(200).json(deletedComment);
    }catch(error){ 
        console.log(error);
        res.status(400).json({ error: error.message });
    }
    }else{
        res.status(409).json({error: "Unauthorized"});
    }

})



module.exports = router;