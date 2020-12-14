const express = require('express');
const router = express.Router();
const apiAuthSign=require('./api/auth');
const apiUser=require('./api/users')
router.use("/users",apiUser);
router.use("/auth",apiAuthSign)
module.exports = router;