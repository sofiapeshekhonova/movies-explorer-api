const bcrypt = require('bcrypt');
const isEmail = require('validator/lib/isEmail');
const mongoose = require('mongoose');
const AuthorizedError = require('../errors/AuthorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'name',
    minlength: [2, 'Must be at least 2 characters.'],
    maxlength: [30, 'Must be at less than 30 characters.'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Неправильный формат почты'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthorizedError('Неправильные почта или пароль'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthorizedError('Неправильные почта или пароль'));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
