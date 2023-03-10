require("dotenv").config();
const env = process.env;

const config = {
  serverPort: env.SERVER_PORT,
  algorithm: env.ALGORITHM,
  salt: env.SALT,
};

module.exports = config;
