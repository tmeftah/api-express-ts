import dotenv from 'dotenv';

dotenv.config();

/** Server Settings */
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

/** Mysql Settings */
const MYSQL_HOST = process.env.MYSQL_HOST || '192.168.178.2';
const MYSQL_PORT = process.env.MYSQL_PORT || 33066;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'books';
const MYSQL_USER = process.env.MYSQL_HOST || 'node';
const MYSQL_PASS = process.env.MYSQL_HOST || 'demo1';

const MYSQL = {
    host: MYSQL_HOST,
    port: +MYSQL_PORT,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS
};

const config = {
    server: SERVER,
    mysql: MYSQL
};

export default config;
