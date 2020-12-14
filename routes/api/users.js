const express = require("express");
const router = express.Router();
const db = require("../../models");
const controller = require("../../controllers/registroController");

router.get("/", async (req, res) => {
  const usuarios = await db.user.findAll();
  res.status(200).json(usuarios);
});

router.post("/registrar", controller.register);
module.exports = router;