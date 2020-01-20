'use strict';

const argv = require('yargs').argv;

class ServiceConfig {
    constructor(argv) {
        this.host = argv.host;
        this.port = argv.port;
        this.msg = argv.msg;
    }

    validatePort() {
        if (!this.port) {
            return new Error('Set proper port');
        }
    }

    validateHost() {
        if (!this.host) {
            return new Error('Set proper host');
        }
    }
}

module.exports = new ServiceConfig(argv);
