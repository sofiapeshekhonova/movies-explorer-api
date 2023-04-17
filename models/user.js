const bcrypt = require('bcrypt');
const isEmail = require('validator/lib/isEmail');
const mongoose = require('mongoose');
const AuthorizedError = require('../errors/AuthorizedError');
const {
  MIN_LENGTH, MAX_LENGTH, EMAIL_ERROR, EMAIL_OR_PASSWORD_ERROR,
} = require('../utils/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, MIN_LENGTH],
    maxlength: [30, MAX_LENGTH],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, EMAIL_ERROR],
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
        return Promise.reject(new AuthorizedError(EMAIL_OR_PASSWORD_ERROR));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthorizedError(EMAIL_OR_PASSWORD_ERROR));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
