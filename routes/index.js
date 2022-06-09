const express = require("express");
const router = express.Router();

/* GET home page. */
router.route("/").get(function (req, res, next) {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;
