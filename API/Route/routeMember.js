const express = require('express');
var router = express.Router();
const MemberController = require('../Controller/MemberController')

router.post('/getAllMember', MemberController.getAllMember);
router.post('/getMemberById', MemberController.getMemberById);
router.post('/AddMember', MemberController.AddMember);
router.post('/UpdateMemberPass', MemberController.UpdateMemberPass);

module.exports = router;