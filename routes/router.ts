import { Router, Request, Response } from "express";

export const router = Router();

router.get("/get", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "todo esta bien",
  });
});

router.post("/mensaje", (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de = req.body.de;
  res.json({
    ok: true,
    cuerpo: cuerpo,
    de: de,
  });
});

router.post("/mensaje/:id", (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de = req.body.de;
  const param = req.params.id;
  res.json({
    ok: true,
    cuerpo,
    de,
    param,
  });
});
