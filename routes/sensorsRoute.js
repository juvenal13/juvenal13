const express = require("express");
const router = express.Router();
const sensorController = require("../controllers/sensorsController");
router.get("/", sensorController.getAllSensors);

router.get("/:organisationId", sensorController.getSensorsByOrganisationId);

router.post("/", sensorController.createsensor);
module.exports = router;
