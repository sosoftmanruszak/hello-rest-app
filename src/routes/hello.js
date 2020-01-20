'use strict';

const express = require('express');
const router = express.Router();
const validationHandler = require('../common/validationHandler')
const { isNotEmptyAlphaNameParam } = require('../validation/hello')
const { getHelloNameHandler } = require('../handlers/hello')

/* GET users listing. */
router.get('/:name',
    validationHandler([isNotEmptyAlphaNameParam]),
    getHelloNameHandler);

module.exports = router;
