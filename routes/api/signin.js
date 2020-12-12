var express = require("express");
var router = express.Router();
var db = require("../../models");

// Require controller modules.
var controller = require("../../controller/controller");

router.post("/signin", controller.signin);
module.exports = router;
