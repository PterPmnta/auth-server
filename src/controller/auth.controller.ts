import { Request, Response } from "express";
import Usuario from "../models/usuario.model";
import bcrypt from "bcryptjs";

export const createUser = async(req: Request, res: Response) => {
  try {

    const {email, name, password} = req.body

    let usuario = await Usuario.findOne({email});

    if(usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo que intenta usar ya esta registrado.'
      });
    }

    const dbUser = new Usuario(req.body);

    const salt = bcrypt.genSaltSync(10);
    dbUser.password = bcrypt.hashSync(password, salt);

    await dbUser.save();

    return res.status(201).json({
      ok: true, 
      uid: dbUser.id,
      name
    })

    return res.json({
      ok: true,
      msg: "Crear usuario",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const loginUser = (req: Request, res: Response) => {
  try {
    return res.json({
      ok: true,
      msg: "Inicio de sesion",
    });
  } catch (error) {
    return error;
  }
};

export const validateJWT = (req: Request, res: Response) => {
  try {
    return res.json({
      ok: true,
      msg: "Validar JWT",
    });
  } catch (error) {
    return error;
  }
};
