"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001,
    STACKONE_API_KEY: Buffer.from((_b = process.env.STACKONE_API_KEY) !== null && _b !== void 0 ? _b : "").toString('base64'),
    STACKONE_BASE_URL: 'https://api.stackone.com',
    STACKONE_ATS_URL: 'https://api.stackone.com/unified/ats',
    ORIGIN_OWNER_ID: process.env.ORIGIN_OWNER_ID,
    ORIGIN_OWNER_NAME: process.env.ORIGIN_OWNER_NAME
};
