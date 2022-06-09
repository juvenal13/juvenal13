const sensorService = require("../services/sensorsService");
const getAllSensors = (req, res) => {
  const allSensors = sensorService.getAllSensors();
  res.send("Get all sensor");
};

const getSensorsByOrganisationId = (req, res) => {
  const sensorInOrg = sensorService.getSensorsByOrganisationId();
  res.send("Get an existing sensor");
};

module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
};
