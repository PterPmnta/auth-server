import { Router } from "express";
import {check} from "express-validator"
import {
  createUser,
  loginUser,
  validateJWT,
} from "../controller/auth.controller";
import { fieldValidate } from "../middlewares/field-validate";

const routes = Router();

routes.post('/new', 
            check('name', 'El nombre es obligatorio').not().isEmpty(),     
            check('email', 'El correo es obligatorio').isEmail(),      
            check('password', 'La contraseña es obligatoria. Minimo de 6 caracteres').isLength({min: 6}),     
            fieldValidate, 
            createUser);

routes.get('/', 
          check('email', 'El correo es obligatorio').isEmail(),      
          check('password', 'La contraseña es obligatoria. Minimo de 6 caracteres').isLength({min: 6}),
          fieldValidate, 
          loginUser);
routes.get('/renew', validateJWT);

export default routes;
