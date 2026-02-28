import express from 'express';
import UserController from '../Controllers/userControllers';


const router = express.Router();

router.get('/login',UserController.getLogin );
router.get('/signup',UserController.getSignup);

export default router;
