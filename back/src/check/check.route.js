const express = require("express");
const router = express.Router();
const controller = require("./check.controller");

router.get("/", (req, res, next) => controller.logout(req, res, next));
router.post("/", (req, res, next) => controller.login(req, res, next));

module.exports = router;
