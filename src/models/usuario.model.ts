import mongoose, { Schema } from "mongoose";

interface IUsuario extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}


const UsuarioSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const Usuario = mongoose.model<IUsuario>('Usuario', UsuarioSchema);
export default Usuario;