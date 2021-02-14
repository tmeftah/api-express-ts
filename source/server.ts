import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import BookRoute from './routes/book';

const NAMESPACE = 'Server';
const router = express();

/** Logging the request */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});

/** Parse the request */
router.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
router.use(express.json()); //Used to parse JSON bodies

/** Rules of API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes */
router.use('/books', BookRoute);

/** Error Handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Create the Server */
const httpserver = http.createServer(router);
httpserver.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on http://${config.server.hostname}:${config.server.port}`));
