"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postApplication = exports.getPostedJobs = exports.getApplications = exports.getJobs = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
const errorHandler_1 = require("./errorHandler");
const getJobs = (accountId, next) => __awaiter(void 0, void 0, void 0, function* () {
    let url = config_1.default.STACKONE_ATS_URL + "/jobs?page_size=25";
    if (next) {
        url += `&next=${encodeURIComponent(next)}`;
    }
    try {
        const response = yield axios_1.default.get(url, {
            headers: {
                'accept': 'application/json',
                'x-account-id': `${accountId}`,
                'authorization': `Basic ${config_1.default.STACKONE_API_KEY}`,
            }
        });
        return response.data;
    }
    catch (error) {
        (0, errorHandler_1.AxiosError)(error);
    }
});
exports.getJobs = getJobs;
const getApplications = (accountId, next) => __awaiter(void 0, void 0, void 0, function* () {
    let url = config_1.default.STACKONE_ATS_URL + "/applications?page_size=25";
    if (next) {
        url += `&next=${encodeURIComponent(next)}`;
    }
    try {
        const response = yield axios_1.default.get(url, {
            headers: {
                'accept': 'application/json',
                'x-account-id': `${accountId}`,
                'authorization': `Basic ${config_1.default.STACKONE_API_KEY}`,
            }
        });
        return response.data;
    }
    catch (error) {
        (0, errorHandler_1.AxiosError)(error);
    }
});
exports.getApplications = getApplications;
const getPostedJobs = (accountId, next) => __awaiter(void 0, void 0, void 0, function* () {
    let url = config_1.default.STACKONE_ATS_URL + "/job_postings?page_size=25";
    if (next) {
        url += `&next=${encodeURIComponent(next)}`;
    }
    try {
        const response = yield axios_1.default.get(url, {
            headers: {
                'accept': 'application/json',
                'x-account-id': `${accountId}`,
                'authorization': `Basic ${config_1.default.STACKONE_API_KEY}`,
            }
        });
        return response.data;
    }
    catch (error) {
        (0, errorHandler_1.AxiosError)(error);
    }
});
exports.getPostedJobs = getPostedJobs;
const postApplication = (accountId, applicationData) => __awaiter(void 0, void 0, void 0, function* () {
    const url = config_1.default.STACKONE_ATS_URL + "/applications";
    try {
        const response = yield axios_1.default.post(url, applicationData, {
            headers: {
                'accept': 'application/json',
                'x-account-id': `${accountId}`,
                'authorization': `Basic ${config_1.default.STACKONE_API_KEY}`,
                'content-type': 'application/json',
            }
        });
        return response.data;
    }
    catch (error) {
        (0, errorHandler_1.AxiosError)(error);
    }
});
exports.postApplication = postApplication;
