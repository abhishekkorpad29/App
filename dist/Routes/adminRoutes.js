"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminControllers_1 = __importDefault(require("../Controllers/adminControllers"));
const router = express_1.default.Router();
router.get('/users', adminControllers_1.default.getUsers);
router.get('/dashboard', adminControllers_1.default.getDashboard);
exports.default = router;
