var express = require('express');
var router = express.Router();
const apiAuthSign=require('./api/signin');
const apiUser=require('./api/user')
router.use("/",apiUser);
router.use("/auth",apiAuthSign)
module.exports = router;