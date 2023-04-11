const express = require('express');
const { getMovies, deleteMovies, postMovies } = require('../controllers/movies');
const { moviesValidator, movieIdValidator } = require('../middlewares/validation');

const router = express.Router();

router.get('/movies', getMovies);

router.post('/movies', moviesValidator, postMovies);

router.delete('/movies/:movieId', movieIdValidator, deleteMovies);

module.exports = router;
