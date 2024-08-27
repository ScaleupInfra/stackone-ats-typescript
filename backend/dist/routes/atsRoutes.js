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
const express_1 = __importDefault(require("express"));
const atsService_1 = require("../service/atsService");
const routesErrorHandler_1 = require("../routes/routesErrorHandler");
const router = express_1.default.Router();
router.get('/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, headers } = req;
    const next = query.next;
    const accountId = headers['x-account-id'];
    try {
        const jobs = yield (0, atsService_1.listAllJobs)(accountId, next);
        res.status(200).send(jobs);
    }
    catch (error) {
        (0, routesErrorHandler_1.handleErrorResponse)(error, res);
    }
}));
router.get('/applications', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, headers } = req;
    const next = query.next;
    const accountId = headers['x-account-id'];
    try {
        const applications = yield (0, atsService_1.listAllApplications)(accountId, next);
        res.status(200).send(applications);
    }
    catch (error) {
        (0, routesErrorHandler_1.handleErrorResponse)(error, res);
    }
}));
router.get('/job-postings', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, headers } = req;
    const next = query.next;
    const accountId = headers['x-account-id'];
    try {
        const postedJobs = yield (0, atsService_1.listPostedJobs)(accountId, next);
        res.status(200).send(postedJobs);
    }
    catch (error) {
        (0, routesErrorHandler_1.handleErrorResponse)(error, res);
    }
}));
router.post('/applications', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { headers, body } = req;
    const accountId = headers['x-account-id'];
    const applicationData = body;
    try {
        const newApplication = yield (0, atsService_1.createApplication)(accountId, applicationData);
        res.status(201).send(newApplication);
    }
    catch (error) {
        (0, routesErrorHandler_1.handleErrorResponse)(error, res);
    }
}));
exports.default = router;
