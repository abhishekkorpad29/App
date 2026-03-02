import { Router } from "express";
import { uploadDocument } from "../controllers/document.controller";

const router = Router();

router.post("/upload", uploadDocument);

export default router;