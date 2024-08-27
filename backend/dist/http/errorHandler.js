"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosError = void 0;
const axios_1 = __importDefault(require("axios"));
const stackoneErrors_1 = require("../errors/stackoneErrors");
const AxiosError = (error) => {
    var _a, _b, _c, _d;
    if (axios_1.default.isAxiosError(error)) {
        const errorMessage = ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || 'An error occurred';
        switch ((_c = error.response) === null || _c === void 0 ? void 0 : _c.status) {
            case 400:
                throw new stackoneErrors_1.InvalidRequestError(errorMessage);
            case 403:
                throw new stackoneErrors_1.ForbiddenRequestError(errorMessage);
            case 412:
                throw new stackoneErrors_1.PreconditionFailedError(errorMessage);
            case 429:
                throw new stackoneErrors_1.TooManyRequestsError(errorMessage);
            case 500:
                throw new stackoneErrors_1.ServerError(errorMessage);
            case 501:
                throw new stackoneErrors_1.NotImplementedError(errorMessage);
            default:
                throw new stackoneErrors_1.UnhandledError(`Unexpected error: ${(_d = error.response) === null || _d === void 0 ? void 0 : _d.status} - ${errorMessage}`);
        }
    }
    else {
        throw new stackoneErrors_1.UnhandledError(`Unexpected error: ${error}`);
    }
};
exports.AxiosError = AxiosError;
