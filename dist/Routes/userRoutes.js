"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = __importDefault(require("../Controllers/userControllers"));
const router = express_1.default.Router();
router.get('/login', userControllers_1.default.getLogin);
router.get('/signup', userControllers_1.default.getSignup);
exports.default = router;
