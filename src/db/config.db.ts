import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

export const  dbConnection = async() => {
    try {
        const db_connection: string = process.env.MONGODB_CONNECTION!;
        await mongoose.connect(db_connection)
        console.log("DB Online");
    } catch (error) {
        console.error(error);
        throw new Error('Error al momento de iniciar la DB');
    }
}