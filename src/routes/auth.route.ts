import { Router } from "express";
import { check } from "express-validator"
import {
  createUser,
  loginUser,
  validateJWT,
} from "../controller/auth.controller";
import { fieldValidate } from "../middlewares/field-validate.middleware";
import { jwtValidator } from "../middlewares/validate-jwt.middleware";

const routes = Router();

routes.post('/new', 
            check('name', 'El nombre es obligatorio').not().isEmpty(),     
            check('email', 'El correo es obligatorio').isEmail(),      
            check('password', 'La contraseña es obligatoria. Minimo de 6 caracteres').isLength({min: 6}),     
            fieldValidate, 
            createUser);

routes.post('/', 
          check('email', 'El correo es obligatorio').isEmail(),      
          check('password', 'La contraseña es obligatoria. Minimo de 6 caracteres').isLength({min: 6}),
          fieldValidate, 
          loginUser);

routes.get('/renew', jwtValidator, validateJWT);

export default routes;
