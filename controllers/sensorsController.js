const sensorService = require("../services/sensorsService");
const getAllSensors = (req, res) => {
  const allSensors = sensorService.getAllSensors();
  res.status(201).send({ status: "OK", data: allSensors });
};

const getSensorsByOrganisationId = (req, res) => {
  const organisationId = req.params.organisationId;
  const sensorInOrg = sensorService.getSensorsByOrganisationId(organisationId);
  res.status(201).send({ status: "OK", data: sensorInOrg });
};

module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
};
