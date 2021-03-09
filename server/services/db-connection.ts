const Promise = require("bluebird"); // or any other Promise/A+ compatible library;
const pgp = require("pg-promise")({ promiseLib: Promise });

const connectionOptions = {
  host: `${process.env.DB_HOST}`,
  port: `${process.env.DB_PORT}`,
  database: `${process.env.DB_NAME}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
};
console.log(
  JSON.stringify({
    ...connectionOptions,
    password: connectionOptions.password[0],
  })
);

export const DB = pgp(connectionOptions);
