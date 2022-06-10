const sensorService = require("../services/sensorsService");
const getAllSensors = async (req, res) => {
  try {
    const allSensors = await sensorService.getAllSensors();
    res.status(201).send({ status: "OK", data: allSensors });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};

const getSensorsByOrganisationId = async (req, res) => {
  const organisationId = req.params.organisationId;
  try {
    const sensorInOrg = await sensorService.getSensorsByOrganisationId(
      organisationId
    );
    res.status(201).send({ status: "OK", data: sensorInOrg });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};
const createsensor = async (req, res) => {
  const { body } = req;
  if (!body.name || !body.organisationId || !body.sensorTypeId) {
    return;
  }
  const newSensor = {
    name: body.name,
    organisationId: body.organisationId,
    sensorTypeId: body.sensorTypeId,
  };
  try {
    const createSensor = await sensorService.createNewSensor(newSensor);
    res.status(201).send({ status: "OK", data: createSensor });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};

const updateSensor = async (req, res) => {
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
    const updatedSensor = await sensorService.updateOneSensor(sensorId, body);
    res.status(201).send({ status: "OK", data: updatedSensor });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};
const deleteSensor = async (req, res) => {
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
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};

module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
  createsensor,
  updateSensor,
  deleteSensor,
};
