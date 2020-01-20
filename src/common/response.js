'use strict';

const httpStatusCode = require('http-status');
const { HttpError } = require('./httpErrors');

function sendSuccessResponse (res,  message) {
    sendStatusResponse(res, httpStatusCode.OK, message);
}

function sendStatusResponse (res, status, message) {
    res.status(status);
    res.json({
        message
    });
}

function sendErrorResponse (err, res) {
    if (err instanceof HttpError) {
        sendStatusResponse(res, err.statusCode, err.message);

        return;
    }

    sendStatusResponse(res, httpStatusCode.INTERNAL_SERVER_ERROR, 'Something went wrong');
}

module.exports = {
    sendSuccessResponse,
    sendErrorResponse
};