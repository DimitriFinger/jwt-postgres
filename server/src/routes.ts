import { Router } from "express";
import usersController from "./controllers/usersController";

const routes = Router();

routes.post('/user', usersController.createUser);

export default routes;