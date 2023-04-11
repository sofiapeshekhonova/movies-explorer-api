const Movies = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const OwnerError = require('../errors/OwnerError');
const {
  FILMS_EMPTY, FILMS_INCORRECT_DATA, FILMS_NOT_FOUND, FILMS_NOT_OWNER,
} = require('../utils/constants');

// GET /movies — возвращает все сохранённые текущим  пользователем фильмы
module.exports.getMovies = (req, res, next) => {
  Movies.find({ owner: req.user._id })
    .then((movies) => {
      if (!movies) {
        throw new NotFoundError(FILMS_EMPTY);
      }
      return res.send(movies);
    })
    .catch((err) => next(err));
};

//  POST /movies — создаёт фильм с переданными в теле
module.exports.postMovies = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameEN,
    nameRU,
  } = req.body;
  const owner = req.user._id;
  Movies.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameEN,
    nameRU,
    owner,
  })
    .then((movies) => res.send(movies))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(FILMS_INCORRECT_DATA));
      } else {
        next(err);
      }
    });
};

// удаляет сохранённый фильм по id  DELETE /movies/_id
module.exports.deleteMovies = (req, res, next) => {
  Movies.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFoundError(FILMS_NOT_FOUND);
    })
    .then((movie) => {
      const owner = movie.owner.toString();
      if (req.user._id === owner) {
        Movies.deleteOne(movie)
          .then(() => {
            res.send(movie);
          })
          .catch(next);
      } else {
        throw new OwnerError(FILMS_NOT_OWNER);
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(FILMS_NOT_FOUND));
      } else {
        next(err);
      }
    });
};
