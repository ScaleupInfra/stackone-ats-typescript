"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const atsRoutes_1 = __importDefault(require("./routes/atsRoutes"));
const connectRoute_1 = __importDefault(require("./routes/connectRoute"));
const accountsRoute_1 = __importDefault(require("./routes/accountsRoute"));
const app = (0, express_1.default)();
const port = config_1.default.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/ats', atsRoutes_1.default);
app.use('/session-token', connectRoute_1.default);
app.use('/ats', accountsRoute_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
