const router = require('express').Router();
const recordManager = require('../managers/recordManager');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', async (req, res) => {
   
    try {
        const records = await recordManager.getAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.get('/:_id', async (req, res) => {
    const recordId = req.params._id;
    try {
        const record = await recordManager.getOne(recordId);
        res.status(200).json(record);
    }catch(error){
        res.status(400).json({ error: error.message });
      }
})

router.post('/', authMiddleware.isAuth, async (req, res) => {
    try {
        const recordData = { artist, title, year, style, imageUrl } = req.body;
        const _ownerId = req.user._id;
        const timestamp = Date.now();
        const record = await recordManager.createRecord({ ...recordData, _ownerId, '_createdOn': timestamp });
        res.json(record);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }

})

router.delete('/:_id/delete/:_ownerId' , authMiddleware.isAuth, authMiddleware.isOwner, async (req, res) => {

    const recordId = req.params._id;
    if(req.user) {
        try{
            const deletedRecord = await recordManager.deleteRecord(recordId);
            res.status(200).json(deletedRecord);
    }catch(error){ 
        console.log(error);
        res.status(400).json({ error: error.message });
    }
    }else{
        res.status(409).json({error: "Unauthorized"})
    }

})







module.exports = router;