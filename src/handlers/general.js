'use strict';

const { NotFoundError } = require('../common/httpErrors');
const { sendErrorResponse } = require('../common/response');

function CORSHandler (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}

function notFoundHandler(req, res, next) {
    next(new NotFoundError('Page not found'));
}

function errorHandler (err, req, res, next) {
    sendErrorResponse(err, res);
}

module.exports = {
    CORSHandler,
    notFoundHandler,
    errorHandler,
};
