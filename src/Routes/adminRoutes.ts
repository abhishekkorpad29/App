import express from 'express';
import AdminController from '../Controllers/adminControllers';


const router = express.Router();

router.get('/users' ,AdminController.getUsers);

router.get('/dashboard',AdminController.getDashboard);


export default router;
