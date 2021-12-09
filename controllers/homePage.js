const router = require("express").Router();
const path = require("path");

router.get("/", async (req, res) => {
  res.render("landingPage");
});

router.get("/work", async (req, res) => {
  res.render("work");
});

router.get("/about", async (req, res) => {
  res.render("about");
});

router.get("/contact", async (req, res) => {
  res.render("contact");
});

module.exports = router;
