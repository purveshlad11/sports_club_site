const express = require('express');

const router = express.Router();
console.log("1");
var memberController = require('../bsrc/member/memberController');
console.log("2");

// router.post('/user/create', function(req, res) { memberControler.createUserControllerFn });
router.route('/user/create').post(memberController.registerMemberControllerFn);
router.route('/memb/register').post(memberController.sportsregisterControllerFn);

console.log("3");

// router.route('/user/findOne').get(memberControler.findOneUserController);
module.exports = router;


