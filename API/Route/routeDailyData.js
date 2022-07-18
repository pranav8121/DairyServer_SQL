const express = require('express');
var router = express.Router();
const dailyDataController = require('../Controller/dailyDataController');

router.post('/getTodayData', dailyDataController.getTodayData);
router.post('/getBill', dailyDataController.getBill);

router.post('/postData', dailyDataController.postData);


module.exports = router;