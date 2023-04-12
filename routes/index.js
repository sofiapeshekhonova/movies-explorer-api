const router = require('express').Router();
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const { PATH_ERROR } = require('../utils/constants');
const { sigupValidator, siginValidator } = require('../middlewares/validation');

router.post('/signup', sigupValidator, createUser);

router.post('/signin', siginValidator, login);

router.use(auth);

router.use('/', usersRoutes);
router.use('/', moviesRoutes);

router.use((req, res, next) => next(new NotFoundError(PATH_ERROR)));

module.exports = router;
