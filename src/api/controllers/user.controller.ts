import { Request, Response } from "express";
import { UserService } from "../../domain/services/user.service";
import { ResponseUtil } from "../../infrastructure/utils/response.util";
import { UploadedFile } from "express-fileupload";
const service = new UserService();

export class UserController {
    static async getUsers(req: Request, res: Response) {
        const users = await service.getUsers();
        return ResponseUtil.success(res, "Users fetched", users);
    }

    static async createUser(req: Request, res: Response) {
        const { name, email, contact_number } = req.body;
        let profile_pic: string | any = null ;

        if (req.files && req.files.profile_pic) {

            const file = req.files.profile_pic as UploadedFile;

            const uploadPath = `uploads/profile/${file.name}`;

            await file.mv(uploadPath);
            const baseUrl = process.env.BASE_URL;

            profile_pic = `${baseUrl}/uploads/profile/${file.name}`;
        }


  
        await service.createUser(name, email, contact_number, profile_pic);
        return ResponseUtil.success(res, "User created");
    }
}