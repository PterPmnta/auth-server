import { Request, Response } from "express";
import Usuario from "../models/usuario.model";
import bcrypt from "bcryptjs";
import { generateJWT } from "../helpers/jwt.helper";

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

    const token = await generateJWT(dbUser.id, dbUser.name);

    await dbUser.save();

    return res.status(201).json({
      ok: true, 
      uid: dbUser.id,
      name,
      token
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export const loginUser = async(req: Request, res: Response) => {
  const {email, password} = req.body
  try {

    const dbUser = await Usuario.findOne({ email });
    if(!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: 'Credenciales invalidas'
      })
    }

    const validPassword = bcrypt.compareSync(password, dbUser.password);
    if(!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Credenciales invalidas'
      })
    }

    const token = await generateJWT(dbUser.id, dbUser.name);

    return res.json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
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
