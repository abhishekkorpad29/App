import { Request, Response } from "express";
import { AdminService } from "../../domain/services/admin.service";
import { ResponseUtil } from "../../infrastructure/utils/response.util";

const service = new AdminService();

export class AdminController {
    static async getAdmins(req: Request, res: Response) {
        const admins = await service.getAdmins();
        return ResponseUtil.success(res, "Admins fetched", admins);
    }
}