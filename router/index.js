const express = require('express');
const router = express.Router();
const UserCtr = require('../controller/UserCtr');

//user login
router.get('/test', UserCtr.test);
router.post('/email', UserCtr.sendEmail);

module.exports = router;