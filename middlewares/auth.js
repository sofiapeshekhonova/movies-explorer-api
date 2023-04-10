const jwt = require('jsonwebtoken');
const AuthorizedError = require('../errors/AuthorizedError');
const JWT_SECRET_DEV = require('../utils/config');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthorizedError('Необходима авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV);
  } catch (err) {
    return next(new AuthorizedError('Необходима авторизация'));
  }

  req.user = payload;
  return next();
};
