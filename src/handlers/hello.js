'use strict';

const {sendSuccessResponse} = require('../common/response');

function getHelloNameHandler (req, res) {
    const name = req.params.name;

    sendSuccessResponse(res, `Hello ${name}.`);
}

module.exports = {
    getHelloNameHandler
};