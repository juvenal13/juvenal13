require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const indexRoute = require("./routes/index");
const organisationRoute = require("./routes/organisationsRoute");
const sensorRoute = require("./routes/sensorsRoute");
const app = express();

const PORT = process.env.PORT || 8080;

const whitelist = process.env.WHITE_LIST.split(",").map((item) => item.trim());
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    console.log("origin:", origin);
    if (process.env.NODE_ENV === "dev") {
      return callback(null, true);
    }
    if (whitelist.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error("Not allowed by CORS"));
  },
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/api/index", indexRoute);

app.use("/api/organisation", organisationRoute);

app.use("/api/sensor", sensorRoute);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports = app;
