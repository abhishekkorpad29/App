import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @route   GET /api/users
 * @desc    Get all users
 */
router.get("/", authMiddleware, UserController.getUsers);

/**
 * @route   POST /api/users
 * @desc    Create new user
 */
router.post("/", authMiddleware, UserController.createUser);

export default router;