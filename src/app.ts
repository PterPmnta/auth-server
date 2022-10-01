import express from "express";
import cors from "cors";
import routes from "./routes/auth.route";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/auth", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
