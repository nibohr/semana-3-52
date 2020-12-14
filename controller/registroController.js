const config = require("../secret/config.js");
const db = require("../models");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const pass = bcrypt.hashSync(req.body.password, 8);
  const user = db.user
    .create({
      name: req.body.name,
      email: req.body.email,
      password: pass,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .then(function (usuario) {
      res.json({
        Message: "Usuario Creado.",
        Item: usuario,
      });
    })
    .catch(function (err) {
      // handle error;
    });
  return res.status(200).send("ok");
};
