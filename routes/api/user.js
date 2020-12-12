var express = require("express");
var router = express.Router();
var db = require("../../models");
var controller = require("../../controller/registroController");

router.get("/", async (req, res) => {
  const usuarios = await db.user.findAll();
  res.status(200).json(usuarios);
});

router.post("/registrar", controller.register);
module.exports = router;