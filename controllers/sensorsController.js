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
const createsensor = (req, res) => {
  const { body } = req;
  if (!body.name || !body.organisationId || !body.sensorTypeId) {
    return;
  }
  const newSensor = {
    name: body.name,
    organisationId: body.organisationId,
    sensorTypeId: body.sensorTypeId,
  };
  const createSensor = sensorService.createNewSensor(newSensor);
  res.status(201).send({ status: "OK", data: createSensor });
};
module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
  createsensor,
};
