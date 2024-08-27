"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorResponse = exports.isKnownError = void 0;
const stackoneErrors_1 = require("../errors/stackoneErrors");
const isKnownError = (error) => {
    return (error instanceof stackoneErrors_1.InvalidRequestError ||
        error instanceof stackoneErrors_1.ForbiddenRequestError ||
        error instanceof stackoneErrors_1.PreconditionFailedError ||
        error instanceof stackoneErrors_1.TooManyRequestsError ||
        error instanceof stackoneErrors_1.ServerError ||
        error instanceof stackoneErrors_1.NotImplementedError ||
        error instanceof stackoneErrors_1.UnhandledError);
};
exports.isKnownError = isKnownError;
const handleErrorResponse = (error, res) => {
    if ((0, exports.isKnownError)(error)) {
        res.status(error.status).json({ code: error.code, message: error.message });
    }
    else {
        res.status(500).json({ message: 'An unexpected error occurred.' });
    }
};
exports.handleErrorResponse = handleErrorResponse;
