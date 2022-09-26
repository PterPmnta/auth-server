import { Router } from "express";

const routes = Router();

routes.route("/new").post((req, res) => {
  return res.json({
    ok: true,
    msg: "Crear usuario",
  });
});

routes.route("/").get((req, res) => {
  return res.json({
    ok: true,
    msg: "Inicio de sesion",
  });
});

routes.route("/renew").get((req, res) => {
  return res.json({
    ok: true,
    msg: "Validar JWT",
  });
});

export default routes;
