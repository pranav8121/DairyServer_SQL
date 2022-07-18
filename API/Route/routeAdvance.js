const express = require('express');
var router = express.Router();
const advanceController = require('../Controller/advanceController');

router.post('/postAdvance', advanceController.postAdvance);
router.post('/getAdvance', advanceController.getAdvance);

module.exports = router;