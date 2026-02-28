"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
const adminRoutes_1 = __importDefault(require("./Routes/adminRoutes"));
const app = (0, express_1.default)();
app.use('/api/admin', adminRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Server is running. 🚀");
});
exports.default = app;
