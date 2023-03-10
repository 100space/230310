const express = require("express");
const router = express.Router();
const check = require("../src/check/check.route");

router.use("/check", check);

module.exports = router;
