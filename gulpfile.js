'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const cliParams = require('./tools/cliParams');

function runTask (done) {
    const validationError = cliParams.validatePort();
    if (validationError) {
        done(validationError);
        return;
    }

    nodemon({
        script: 'bin/www',
        env: {
            SERVICE_PORT: cliParams.port
        },
        done: done
    });
}

function testsTask (done) {
    return gulp.src(['tests/*'], {read: false})
        .pipe(mocha({exit: true}))
        .on('error', error => done(error));
}

function apiTestsTask (done) {
    const error = cliParams.validateHost() || cliParams.validatePort();
    if (error) {
        done(error);
        return;
    }

    return gulp.src(['tests-api/*'], {read: false})
        .pipe(mocha({
            exit: true,
            '--host': cliParams.host,
            '--port': cliParams.port,
        }))
        .once('error', error => done(error));
}

function eslintTask() {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

gulp.task('eslint', eslintTask);
gulp.task('run', runTask);
gulp.task('tests:unit', testsTask);
gulp.task('tests:api', apiTestsTask);

exports.default = gulp.series('eslint', 'tests:unit', 'run');

