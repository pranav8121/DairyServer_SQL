const express = require('express');
var router = express.Router();
var loginController = require('../Controller/loginController')

// Dairy Auth
router.get('/getallDairyCred', loginController.getallDairyCred);
router.get('/browserClosed', loginController.browserClosed);



router.post('/AuthDairy', loginController.AuthDairy);
router.post('/CreateAuthDairy', loginController.CreateAuthDairy);
router.post('/logoutDairy', loginController.logoutDairy);

// Member Auth
router.post('/AuthMember', loginController.AuthMember);
router.post('/logoutMember', loginController.logoutMember);

module.exports = router;