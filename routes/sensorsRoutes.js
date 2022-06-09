const express = require("express");
const router = express.Router();
const sensorController = require("../controllers/sensorsController");
router.get("/", sensorController.getAllSensors);

router.get("/:organisationId", sensorController.getSensorsByOrganisationId);
module.exports = router;
