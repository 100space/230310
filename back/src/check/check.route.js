const express = require("express");
const router = express.Router();
const controller = require("./check.controller");
const auth = require("../../middlewares/auth");

router.get(
  "/",
  (req, res, next) => auth.verify(req, res, next),
  (req, res, next) => controller.me(req, res, next)
);
router.post("/", (req, res, next) => controller.login(req, res, next));
router.delete(
  "/",
  (req, res, next) => auth.verify(req, res, next),
  (req, res, next) => controller.logout(req, res, next)
);

module.exports = router;
