const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const { createRecord, getRecords } = require('../controllers/recordController');

router.post('/', auth, role("admin"), createRecord);
router.get('/', auth, role("admin", "analyst", "viewer"), getRecords);

module.exports = router;