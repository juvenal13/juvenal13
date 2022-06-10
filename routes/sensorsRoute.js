const express = require("express");
const router = express.Router();
const sensorController = require("../controllers/sensorsController");
router.get("/", sensorController.getAllSensors);

router.get("/:organisationId", sensorController.getSensorsByOrganisationId);

router.post("/", sensorController.createsensor);

router.delete("/delete/:sensorId", sensorController.deleteSensor);

router.put("/update/:sensorId", sensorController.updateSensor);
module.exports = router;
