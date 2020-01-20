'use strict';

const {HelloClientAPI} = require('../tools/HelloClientAPI');
const cliParams = require('./cliParams');

const display = (message) => process.stdout.write(`${message}\n`);

const error = cliParams.validateHost() || cliParams.validatePort();
if (error) {
    display(error);
    process.exit(1);
}

const helloClientAPI = new HelloClientAPI(cliParams.host, cliParams.port);

function printResponse(response) {
    display(`status: ${response.status}`);
    display(`data:\n${JSON.stringify(response.data, null, 2)}`);
}

helloClientAPI.Hello(cliParams.msg)
    .then(printResponse)
    .catch(error => {
        const response = error.response;
        if (!response) {
            throw error;
        }

        printResponse(response);
    })
    .catch(error => display(error.message));
