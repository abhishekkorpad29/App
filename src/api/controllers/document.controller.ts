import { Request, Response, NextFunction } from "express";
import { DocumentService } from "../../domain/services/document.service";

const service = new DocumentService();

export const uploadDocument = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = Number(req.body.user_id);
        const documentType = req.body.document_type;
        const file = req.files?.document;

        const result = await service.uploadDocument(
            userId,
            documentType,
            file as any
        );

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};