'use strict';

const httpStatusCode = require('http-status');

class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

class NotFoundError extends HttpError {
    constructor(message) {
        super(httpStatusCode.NOT_FOUND, message);
    }
}
class BadRequestError extends HttpError {
    constructor(message) {
        super(httpStatusCode.BAD_REQUEST, message);
    }
}
class InternalServerError extends HttpError {
    constructor(message) {
        super(httpStatusCode.INTERNAL_SERVER_ERROR, message);
    }
}

module.exports = {
    HttpError,
    NotFoundError,
    BadRequestError,
    InternalServerError
};
