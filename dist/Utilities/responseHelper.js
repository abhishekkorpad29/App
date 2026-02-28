"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseHelper {
    static success(res, message = "Success", data = null, statusCode = 200) {
        return res.status(statusCode).json({
            status: true,
            statusCode,
            message,
            data
        });
    }
    static error(res, message = "Error", statusCode = 500, data = null) {
        return res.status(statusCode).json({
            status: false,
            statusCode,
            message,
            data
        });
    }
}
exports.default = ResponseHelper;
