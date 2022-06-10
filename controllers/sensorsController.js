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

const updateSensor = (req, res) => {
  const {
    body,
    params: { sensorId },
  } = req;
  if (!sensorId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':sensorId' can not be empty" },
    });
  }
  try {
    const updatedSensor = sensorService.updateOneSensor(sensorId, body);
    res.status(201).send({ status: "OK", data: updatedSensor });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const deleteSensor = (req, res) => {
  const {
    params: { sensorId },
  } = req;
  if (!sensorId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }
  try {
    sensorService.deleteOneSensor(sensorId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
  createsensor,
  updateSensor,
  deleteSensor,
};
