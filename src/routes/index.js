'use strict';

const express = require('express');
const router = express.Router();

const index = require('../handlers');

router.get('/', index.mainHandler);
router.get('/healthcheck', index.healthcheckHandler);

module.exports = router;
