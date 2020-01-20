'use strict';

const _ = require('underscore');
const { validationResult } = require('express-validator');
const { BadRequestError } = require('../common/httpErrors');

const checkValidationResultHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    const errorsMapped = _.map(errors.mapped(), (error) => {
        return error.msg;
    });

    throw new BadRequestError(errorsMapped);
};


module.exports =  function (validationChain) {
    validationChain.push(checkValidationResultHandler);
    return validationChain;
};


