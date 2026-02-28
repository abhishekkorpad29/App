import ResponseHelper from '../Utilities/responseHelper';
import { Request, Response } from "express";


class UserController {

    static getLogin(req: Request, res: Response) {
        try {
            return ResponseHelper.success(
                res,
                "Login page loaded",
                null,
                200
            );
        } catch (error) {
            console.error(error);
            return ResponseHelper.error(
                res,
                "Failed to load login page",
                500
            );
        }
    }

    static getSignup(req: Request, res: Response) {
        try {
            return ResponseHelper.success(
                res,
                "Signup page loaded",
                null,
                200
            );
        } catch (error) {
            console.error(error);
            return ResponseHelper.error(
                res,
                "Failed to load signup page",
                500
            );
        }
    }

}

export default UserController;