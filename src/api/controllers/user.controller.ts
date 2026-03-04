import { Request, Response } from "express";
import { UserService } from "../../domain/services/user.service";
import { ResponseUtil } from "../../infrastructure/utils/response.util";
import { UploadedFile } from "express-fileupload";
import { DocumentService } from "../../domain/services/document.service";
const service = new UserService();
const documentService = new DocumentService;
export class UserController {
    static async getUsers(req: Request, res: Response) {
        const users = await service.getUsers();
        return ResponseUtil.success(res, "Users fetched", users);
    }

    static async createUser(req: Request, res: Response) {
        try {

            const { name, email, password, contact_number } = req.body;

            // 1️⃣ Create user first
            const user = await service.createUser(
                name,
                email,
                password,
                contact_number,
                null
            );

            // 2️⃣ Upload profile pic if exists
            if (req.files && req.files.profile_pic) {

                const file = req.files.profile_pic as UploadedFile;

                await documentService.uploadDocument(
                    user.id,
                    "profile",
                    file
                );

                const baseUrl = process.env.BASE_URL;
                const profilePicUrl = `${baseUrl}/uploads/profile/${file.name}`;

                await service.updateProfilePic(user.id, profilePicUrl);
            }

            return ResponseUtil.success(res, "User created successfully");
            
        } catch (error: any) {
            return ResponseUtil.error(res, error.message);
        }
        
    }


    static async loginUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const result = await service.loginUser(email, password);

            return ResponseUtil.success(res, "Login successful", result);

        } catch (error: any) {
            return ResponseUtil.error(res, error.message);
        }
    }
}