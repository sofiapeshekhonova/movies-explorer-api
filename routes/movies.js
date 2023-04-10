const { celebrate, Joi } = require('celebrate');
const express = require('express');
const { URL_CHECK } = require('../utils/constants');
const { getMovies, deleteMovies, postMovies } = require('../controllers/movies');

const router = express.Router();

router.get('/movies', getMovies);

router.post('/movies', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(URL_CHECK),
    trailerLink: Joi.string().required().regex(URL_CHECK),
    thumbnail: Joi.string().required().regex(URL_CHECK),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), postMovies);

router.delete('/movies/:movieId', deleteMovies);

module.exports = router;
