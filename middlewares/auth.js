const jwt = require('jsonwebtoken');
const AuthorizedError = require('../errors/AuthorizedError');
const { AUTHORIZATION_REQUIRED } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthorizedError(AUTHORIZATION_REQUIRED));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new AuthorizedError(AUTHORIZATION_REQUIRED));
  }

  req.user = payload;
  return next();
};
