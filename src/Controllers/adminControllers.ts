import ResponseHelper from '../Utilities/responseHelper';
import { Request, Response } from "express";


class AdminController {

    static getUsers(req: Request, res: Response) {
        try {
            const users: string[]  = ["John", "Jane"];

            return ResponseHelper.success(
                res,
                "Users fetched successfully",
                users,
                200
            );

        } catch (error) {
            console.error(error);
            return ResponseHelper.error(
                res,
                "Failed to fetch users",
                500
            );
        }
    }

    static getDashboard(req: Request, res: Response):Response {
        try {
            return ResponseHelper.success(
                res,
                "Dashboard loaded",
                { totalUsers: 10 },
                200
            )

        } catch (error) {
            return ResponseHelper.error(
                res,
                "Something went wrong",
                500
            );
        }
    }

}

export default AdminController;