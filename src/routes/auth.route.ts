import { Router } from "express";
import {
  createUser,
  loginUser,
  validateJWT,
} from "../controller/auth.controller";

const routes = Router();

routes.route("/new").post(createUser);
routes.route("/").get(loginUser);
routes.route("/renew").get(validateJWT);

export default routes;
