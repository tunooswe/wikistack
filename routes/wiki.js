const express = require("express");
const router = express.Router();
const wikipage = require("../views/wikipage");
const { Page } = require("../models");
const { addPage } = require("../views");

Page.beforeValidate(() => {});
function generateSlug(title) {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  return title.replace(/\s+/g, "_").replace(/\W/g, "");
}

router.get("/", (req, res, next) => {
  res.send("wikipage");
});

router.post("/", async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const slug = generateSlug(title);
  try {
    const page = await Page.create({
      title,
      content,
      slug,
    });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
