import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const generateJWT = async (uid: string, name: string) => {
    const payload = {uid, name};
    return await new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED!, {
            expiresIn: "24h",
        }, (err, token) => {
            if(err) {
                reject(err);
            }else{
                resolve(token);
            }
        });
    })
    
}