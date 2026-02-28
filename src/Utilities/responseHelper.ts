// utilities/responseHelper.js
import express, { Response } from "express";

class ResponseHelper {

    static success<T>(res: Response, message = "Success", data :T | null = null , statusCode = 200) {
        return res.status(statusCode).json({
            status: true,
            statusCode,
            message,
            data
        });
    }

    static error(res : Response, message = "Error", statusCode = 500, data = null) {
        return res.status(statusCode).json({
            status: false,
            statusCode,
            message,
            data
        });
    }

}

export default ResponseHelper;