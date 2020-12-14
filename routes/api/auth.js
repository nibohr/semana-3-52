const express = require("express");
const router = express.Router();
const db = require("../../models");

// Require controller modules.
const controller = require("../../controller/controller");

router.post("/signin", controller.signin);
module.exports = router;
