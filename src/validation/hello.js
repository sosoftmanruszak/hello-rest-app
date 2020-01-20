'use strict';

const {param} = require('express-validator');

const isNotEmptyAlphaNameParam = param('name')
    .exists()
    .isAlpha()
    .withMessage('Id must be alpha format');

module.exports = {
    isNotEmptyAlphaNameParam
};