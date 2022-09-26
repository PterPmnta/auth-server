import express, { Response, Request } from "express";

const app = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send({ message: "Hola Mundo" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
