"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseHelper_1 = __importDefault(require("../Utilities/responseHelper"));
class UserController {
    static getLogin(req, res) {
        try {
            return responseHelper_1.default.success(res, "Login page loaded", null, 200);
        }
        catch (error) {
            console.error(error);
            return responseHelper_1.default.error(res, "Failed to load login page", 500);
        }
    }
    static getSignup(req, res) {
        try {
            return responseHelper_1.default.success(res, "Signup page loaded", null, 200);
        }
        catch (error) {
            console.error(error);
            return responseHelper_1.default.error(res, "Failed to load signup page", 500);
        }
    }
}
exports.default = UserController;
