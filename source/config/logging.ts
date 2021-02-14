const getTimeStamp = (): string => {
    return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

const warning = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [WARNING] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [WARNING] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

export default {
    info,
    debug,
    warning,
    error
};
