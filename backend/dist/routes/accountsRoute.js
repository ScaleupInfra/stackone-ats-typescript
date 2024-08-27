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
const accountsService_1 = require("../service/accountsService");
const routesErrorHandler_1 = require("../routes/routesErrorHandler");
const router = express_1.default.Router();
router.get('/accounts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield (0, accountsService_1.listAllAccounts)();
        res.status(200).send(accounts);
    }
    catch (error) {
        (0, routesErrorHandler_1.handleErrorResponse)(error, res);
    }
}));
exports.default = router;
