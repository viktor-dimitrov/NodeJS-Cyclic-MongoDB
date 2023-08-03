const router = require('express').Router();
const commentManager = require('../managers/commentManager');
const authMiddleware = require('../middlewares/authMiddleware');



router.post('/', authMiddleware.isAuth, async (req, res) => {
    try {
        const commentData = { _recordId, text } = req.body;
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