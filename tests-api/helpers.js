'use strict';

const {HelloClientAPI} = require('../tools/HelloClientAPI');

function createHelloClient(config) {
    return new HelloClientAPI(config.host, config.port);
}

function unexpectedSuccessResponse() {
    return new Error('Unexpected success response');
}

function getStatus(error) {
    const response = error.response;
    if (response) {
        return response.status;
    }
}

module.exports = {
    createHelloClient,
    unexpectedSuccessResponse,
    getStatus
};