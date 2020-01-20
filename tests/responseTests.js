const sinon = require('sinon');
const assert = require('chai').assert;
const { INTERNAL_SERVER_ERROR, BAD_REQUEST, UNAUTHORIZED } = require('http-status');

const {sendErrorResponse, sendSuccessResponse } = require('../src/common/response');
const { BadRequestError, HttpError } = require('../src/common/httpErrors');

function createResponse() {
    return {
        status: sinon.spy(),
        end: sinon.spy(),
        json: sinon.spy()
    };
}

describe('response', () => {
    describe('createResponse', () => {
        it('should set internal error status when error is not http error', () => {
            let error = new Error();
            let response = createResponse();

            sendErrorResponse(error, response);

            assert(response.end.notCalled);
            assert(response.json.calledOnce);
            assert(response.status.calledWith(INTERNAL_SERVER_ERROR));
        });

        it('should set response status as expected when error is http error', () => {
            let expectedStatusCode = BAD_REQUEST;
            let error = new BadRequestError();
            let response = createResponse();

            sendErrorResponse(error, response);

            assert(response.end.notCalled);
            assert(response.json.calledOnce);
            assert(response.status.calledWith(expectedStatusCode));
        });

        it('should send body when error is http error', () => {
            let expectedStatusCode = UNAUTHORIZED;
            let error = new HttpError(expectedStatusCode, 'error message');
            let response = createResponse();

            sendErrorResponse(error, response);

            assert(response.end.notCalled);
            assert(response.json.calledOnce);
            assert(response.status.calledWith(expectedStatusCode));
        });
    });


    describe('sendSuccessResponse', () => {
        it('should ok status', () => {
            let expectedStatusCode = 200;
            let response = createResponse();

            sendSuccessResponse(response, 'success message');

            assert(response.end.notCalled);
            assert(response.json.calledOnce);
            assert(response.status.calledWith(expectedStatusCode));
        });
    });
});
