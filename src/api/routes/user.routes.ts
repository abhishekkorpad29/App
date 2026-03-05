import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validateSignup } from "../middlewares/validateSignup.middleware";
import { loginValidator } from "../middlewares/validateLogin.middleware";
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
router.post("/signup", validateSignup, UserController.createUser);

router.post("/login", loginValidator, UserController.loginUser);

export default router;