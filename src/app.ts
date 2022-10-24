import express from "express";
import path from "path";
import cors from "cors";
import routes from "./routes/auth.route";
import dotenv from "dotenv";
import { dbConnection } from "./db/config";
dotenv.config();

const app = express();
dbConnection();
const port = process.env.PORT;

app.use(express.static('src/public'));

app.use(cors());
app.use(express.json());
app.use("/api/auth", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
