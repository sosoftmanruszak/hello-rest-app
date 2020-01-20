'use strict';

const expect = require('chai').expect;
const config = require('../tools/cliParams');
const helpers = require('./helpers');

describe ('hello endpoint api tests-api', () => {
    before((done) => {
        const error = config.validatePort() || config.validateHost();
        done(error);
    });

    it ('Should return status OK when proper name format given', (done) => {
        const expectedStatus = 200;
        const client = helpers.createHelloClient(config);
        client.Hello('magda')
            .then(response => {
                expect(response.status).to.equal(expectedStatus);
                done();
            })
            .catch(error => done(error));
    });

    it ('Should return bad request status when name contains number', (done) => {
        const expectedStatus = 400;
        const client = helpers.createHelloClient(config);

        client.Hello('m4gd4')
            .then(helpers.unexpectedSuccessResponse)
            .catch(error => {
                const status = helpers.getStatus(error);
                if (status) {
                    expect(status).to.equal(expectedStatus);
                    done();

                    return;
                }

                throw error;
            })
            .catch(error => done(error));
    });
});