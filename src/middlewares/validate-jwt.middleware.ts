import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
    uid: string,
    name: string
}

declare module "express-serve-static-core" {
    interface Request {
        uid?: string;
        name?: string;
    }
  }

export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('x-token');

    if(!token) {
      return res.status(401).json({
        ok: false,
        msg: 'Error en el token'
      })
    }

    try {
        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED!) as JwtPayload;
        req.uid = uid;
        req.name = name;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }

    next();
}