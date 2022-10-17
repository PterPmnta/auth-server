import { Router } from "express";
import {
  createUser,
  loginUser,
  validateJWT,
} from "../controller/auth.controller";

const routes = Router();

routes.post('/new', createUser);
routes.get('/', loginUser);
routes.get('/renew', validateJWT);

export default routes;
