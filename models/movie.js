const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    minlength: [1, 'Must be at least 1 characters.'],
    maxlength: [30, 'Must be at less than 30 characters.'],
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: [isURL, 'Неправильный формат ссылки'],
  },
  trailerLink: {
    type: String,
    required: true,
    validate: [isURL, 'Неправильный формат ссылки'],
  },
  thumbnail: {
    type: String,
    required: true,
    validate: [isURL, 'Неправильный формат ссылки'],
  },
  owner: {
    required: true,
    ref: 'user',
    type: mongoose.Schema.Types.ObjectId,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
