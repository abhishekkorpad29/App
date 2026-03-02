import { Response } from "express";

export class ResponseUtil {
    static success(res: Response, message: string, data: any = null, status = 200) {
        return res.status(status).json({
            success: true,
            message,
            data
        });
    }

    static error(res: Response, message: string, status = 500) {
        return res.status(status).json({
            success: false,
            message
        });
    }
}