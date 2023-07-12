const router = require('express').Router();
const recordManager = require('../managers/recordManager');
const { recordFilter } = require('../lib/utils/filterFactory');


router.get('/', async (req, res) => {

    const filterArray = recordFilter(req.query);

    try {
        const records = await recordManager.getAll(filterArray);
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/', async (req, res) => {

    try {
        const recordData = { artist, title, year, style, imageUrl } = req.body;
        const _ownerId = req.user._id;
        const timestamp = Date.now();
        const record = await recordManager.create({ ...recordData, _ownerId, '_createdOn': timestamp });
        res.json(record);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }


})
module.exports = router;