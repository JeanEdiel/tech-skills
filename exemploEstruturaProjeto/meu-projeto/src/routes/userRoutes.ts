import express, { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRoutes: Router = express.Router();

const userController = new UserController();

userRoutes.get('/users', userController.getUsers);


export default userRoutes;