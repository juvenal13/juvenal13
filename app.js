require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const indexRoute = require("./routes/index");
const organisationRoute = require("./routes/organisationsRoute");
const sensorRoute = require("./routes/sensorsRoute");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use("/api/index", indexRoute);

app.use("/api/organisation", organisationRoute);

app.use("/api/sensor", sensorRoute);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports = app;
