const createError = require("http-errors");

const express = require("express");
const indexRoute = require("./routes/index");
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/ind", indexRoute);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports = app;
