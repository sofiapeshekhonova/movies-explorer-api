const { PORT = '3000' } = process.env;
const { DB = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;
const { JWT_SECRET_DEV = 'dev-secret' } = process.env;

module.exports = {
  PORT,
  DB,
  JWT_SECRET_DEV,
};
