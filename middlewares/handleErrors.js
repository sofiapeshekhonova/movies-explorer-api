const { INTERNAL_SERVERE_ERROR } = require('../errors/errors_constants');
const { SERVER_ERROR } = require('../utils/constants');

const handleErrors = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(INTERNAL_SERVERE_ERROR).send({ message: SERVER_ERROR });
  }
  next();
};

module.exports = handleErrors;
