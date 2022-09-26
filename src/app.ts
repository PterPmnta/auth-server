import express from "express";
import routes from "./routes/auth";

const app = express();
const port = 3000;

app.use("/api/auth", routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
