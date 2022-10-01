import express from "express";
import routes from "./routes/auth.route";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/api/auth", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
