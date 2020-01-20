'use strict';

const {sendSuccessResponse} = require('../common/response');

function mainHandler(req, res) {
    sendSuccessResponse(res, 'Hello REST App');
}

function healthcheckHandler(req, res, next) {
    sendSuccessResponse(res, 'OK');
}

module.exports = {
    mainHandler,
    healthcheckHandler
};