const URL_CHECK = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const FILMS_EMPTY = 'Нет сохраненных фильмов';
const FILMS_INCORRECT_DATA = 'Переданы некорректные данные при создании фильма';
const FILMS_NOT_FOUND = 'Фильм с указанным _id не найден.';
const FILMS_INVALID_UD = 'Передан не валидный id';
const FILMS_NOT_OWNER = 'Чужой фильм удалить нельзя';
const FILMS_ID_NOT_FOUND = 'Передан некорректный id';

const USER_ALREADY_EXISTS = 'Пользователь с такой почтой уже зарегистрирован';
const USER_INCORRECT_DATA = 'Переданы некорректные данные при создании пользователя';
const USER_INCORRECT_DATA__UPDATE = 'Переданы некорректные данные при обновлении пользователя';
const USER_NOT_FOUND = 'Пользователь несуществует в БД id';

const AUTHORIZATION_REQUIRED = 'Необходима авторизация';
const SERVER_ERROR = 'На сервере произошла ошибка';
const LINK_ERROR = 'Неправильный формат ссылки';
const MIN_LENGTH = 'Длина должна быть не меньше двух символа';
const MAX_LENGTH = 'Длина должна быть не больше 30 символов';
const EMAIL_ERROR = 'Неправильный формат почты';
const EMAIL_OR_PASSWORD_ERROR = 'Неправильные почта или пароль';
const PATH_ERROR = 'Неправильный путь';

module.exports = {
  URL_CHECK,
  FILMS_EMPTY,
  FILMS_INCORRECT_DATA,
  FILMS_NOT_FOUND,
  FILMS_NOT_OWNER,
  FILMS_ID_NOT_FOUND,
  USER_ALREADY_EXISTS,
  USER_INCORRECT_DATA,
  USER_NOT_FOUND,
  AUTHORIZATION_REQUIRED,
  SERVER_ERROR,
  LINK_ERROR,
  MIN_LENGTH,
  MAX_LENGTH,
  EMAIL_ERROR,
  EMAIL_OR_PASSWORD_ERROR,
  PATH_ERROR,
  USER_INCORRECT_DATA__UPDATE,
  FILMS_INVALID_UD,
};
