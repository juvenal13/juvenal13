const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all organisations");
});

router.get("/:organisationId", (req, res) => {
  res.send("Get an existing organisation");
});

router.post("/", (req, res) => {
  res.send("Create a new organisation");
});
module.exports = router;
