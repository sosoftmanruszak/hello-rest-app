'use strict';

const expect = require('chai').expect;
const config = require('../tools/cliParams');
const helpers = require('./helpers');

describe ('general api tests-api', () => {
    before((done) => {
        const error = config.validatePort() || config.validateHost();
        done(error);
    });

    it ('Should return not found when path does not exist', (done) => {
        const expectedStatus = 404;
        const client = helpers.createHelloClient(config);

        client.Get('/wrong/path')
            .then(() => done(helpers.unexpectedSuccessResponse()))
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

    it ('Should return ok status when healthcheck called', (done) => {
        const expectedStatus = 200;
        const client = helpers.createHelloClient(config);

        client.Healhcheck()
            .then(response => {
                expect(response.status).to.equal(expectedStatus);
                done();
            })
            .catch(error => done(error));
    });
});