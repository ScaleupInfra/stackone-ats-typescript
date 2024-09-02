"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnhandledError = exports.NotImplementedError = exports.ServerError = exports.TooManyRequestsError = exports.PreconditionFailedError = exports.ForbiddenRequestError = exports.InvalidRequestError = void 0;
class StackOneError extends Error {
    constructor(message, code, status) {
        super(message);
        this.code = code;
        this.status = status;
    }
}
class InvalidRequestError extends StackOneError {
    constructor(message) {
        super(message, 'INVALID_REQUEST', 400);
    }
}
exports.InvalidRequestError = InvalidRequestError;
class ForbiddenRequestError extends StackOneError {
    constructor(message) {
        super(message, 'FORBIDDEN_REQUEST', 403);
    }
}
exports.ForbiddenRequestError = ForbiddenRequestError;
class PreconditionFailedError extends StackOneError {
    constructor(message) {
        super(message, 'PRECONDITION_FAILED', 412);
    }
}
exports.PreconditionFailedError = PreconditionFailedError;
class TooManyRequestsError extends StackOneError {
    constructor(message) {
        super(message, 'TOO_MANY_REQUESTS', 429);
    }
}
exports.TooManyRequestsError = TooManyRequestsError;
class ServerError extends StackOneError {
    constructor(message) {
        super(message, 'SERVER_ERROR', 500);
    }
}
exports.ServerError = ServerError;
class NotImplementedError extends StackOneError {
    constructor(message) {
        super(message, 'NOT_IMPLEMENTED', 501);
    }
}
exports.NotImplementedError = NotImplementedError;
class UnhandledError extends StackOneError {
    constructor(message) {
        super(message, 'UNHANDLED_ERROR', 500);
    }
}
exports.UnhandledError = UnhandledError;
