import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import logging from '../config/logging';
import IUser from '../interfaces/user';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
    logging.info(NAMESPACE, `Attempting to sign token for ${user.username}`);
    var timeSingnEpoch = new Date().getTime();
    var expirationtime = timeSingnEpoch + Number(config.server.token.expireTime) * 100000;
    var exprirationeInSeconds = Math.floor(expirationtime / 1000);

    try {
        jwt.sign(
            {
                username: user.username
            },
            config.server.token.secret,
            {
                issuer: config.server.token.issure,
                algorithm: 'HS256',
                expiresIn: exprirationeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error) {
        logging.error(NAMESPACE, error.message, error);
        callback(error, null);
    }
};

export default signJWT;
