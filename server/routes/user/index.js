const express = require('express');
const router = express.Router();

const { isLoggedIn, isNotLoggedIn } = require('../../middlewares');
const { getMyInfo, signin, signup, logout } = require('./user.ctrl');

router.get('/', isLoggedIn, getMyInfo);
router.post('/signin', isNotLoggedIn, signin);
router.post('/signup', isNotLoggedIn, signup);
router.post('/logout', isLoggedIn, logout);

module.exports = router;
