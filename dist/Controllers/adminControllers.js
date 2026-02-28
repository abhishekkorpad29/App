"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseHelper_1 = __importDefault(require("../Utilities/responseHelper"));
class AdminController {
    static getUsers(req, res) {
        try {
            const users = ["John", "Jane"];
            return responseHelper_1.default.success(res, "Users fetched successfully", users, 200);
        }
        catch (error) {
            console.error(error);
            return responseHelper_1.default.error(res, "Failed to fetch users", 500);
        }
    }
    static getDashboard(req, res) {
        try {
            return responseHelper_1.default.success(res, "Dashboard loaded", { totalUsers: 10 }, 200);
        }
        catch (error) {
            return responseHelper_1.default.error(res, "Something went wrong", 500);
        }
    }
}
exports.default = AdminController;
