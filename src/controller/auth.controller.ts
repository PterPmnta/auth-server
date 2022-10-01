import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  try {
    return res.json({
      ok: true,
      msg: "Crear usuario",
    });
  } catch (error) {
    return error;
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
