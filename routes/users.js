const express = require('express');
const { getUser, updateUser } = require('../controllers/users');
const { userValidator } = require('../middlewares/validation');

const router = express.Router();

router.get('/users/me', getUser);

router.patch('/users/me', userValidator, updateUser);

module.exports = router;
