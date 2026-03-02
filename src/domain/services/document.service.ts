import path from "path";
import fs from "fs";
import { UploadedFile } from "express-fileupload";
import { DocumentRepository } from "../repositories/document.repository";


export class DocumentService {
    private repo = new DocumentRepository();
    
    async uploadDocument(
        userId: number,
        documentType: string,
        file: UploadedFile
    ) {
        if (!file) {
            throw new Error("No file uploaded");
        }

        if (!documentType) {
            throw new Error("Document type is required");
        }

        // Validate allowed document types (security)
        // const allowedDocs = ["invoice", "aadhaar", "passport"];

        // if (!allowedDocs.includes(documentType)) {
        //     throw new Error("Invalid document type");
        // }

        // Create dynamic folder path
        const folderPath = path.join(
            __dirname,
            "../../../uploads",
            documentType
        );

        // 🔥 CREATE FOLDER IF NOT EXISTS
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });

        }
       


        const fileName = `${Date.now()}-${file.name}`;
        const uploadPath = path.join(folderPath, fileName);

        // Move file
        await file.mv(uploadPath);

        const baseUrl = process.env.BASE_URL;
        const fullFilePath = `${baseUrl}/uploads/${documentType}/${fileName}`;

        // Save in DB
        await this.repo.create({
            user_id: userId,
            document_type: documentType,
            file_name: fileName,
            file_path: fullFilePath,
        });

        return {
            message: `${documentType} uploaded successfully`,
        };
    }
}