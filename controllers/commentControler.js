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



module.exports = router;