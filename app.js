
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {CORSHandler,notFoundHandler, errorHandler} = require('./src/handlers/general');

const indexRouter = require('./src/routes/index');
const helloRouter = require('./src/routes/hello');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(CORSHandler);
app.use('/', indexRouter);
app.use('/hello', helloRouter);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
