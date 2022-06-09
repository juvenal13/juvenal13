const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all sensors");
});

router.get("/:organisationId", (req, res) => {
  res.send("Get an existing sensor");
});
module.exports = router;
