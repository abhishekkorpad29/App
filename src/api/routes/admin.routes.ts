import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @route   GET /api/admin
 * @desc    Get all admins
 */
router.get("/", authMiddleware, AdminController.getAdmins);

export default router;