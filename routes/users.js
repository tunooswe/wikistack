const express = require("express");
const router = express.Router();
const userList = require("../views/userList");
const Sequalize = require("sequelize");
const { db, User } = require("../models");

router.get("/", (req, res, next) => {
  res.send();
});

router.post("/", async (req, res, next) => {
  res.send();
});

router.get("/:id", (req, res, next) => {
  res.send();
});

router.put("/:id", (req, res, next) => {
  res.send();
});

router.delete("/:id", (req, res, next) => {
  res.send();
});

module.exports = router;
