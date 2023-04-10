const { celebrate, Joi } = require('celebrate');
const express = require('express');
const { getUser, updateUser } = require('../controllers/users');

const router = express.Router();

router.get('/users/me', getUser);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
}), updateUser);

module.exports = router;
