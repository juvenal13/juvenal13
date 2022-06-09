const SensorsModel = require("../models/sensorsModel");
const sensorModel = new SensorsModel();
const getAllSensors = () => {
  return sensorModel.all();
};

const getSensorsByOrganisationId = (organisationId) => {
  return sensorModel.findById(organisationId, "organisationId");
};

const createNewSensor = (newSensor) => {
  sensorModel.name = newSensor.name;
  sensorModel.organisationId = newSensor.organisationId;
  sensorModel.sensorTypeId = newSensor.sensorTypeId;
  return sensorModel.create();
};

module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
  createNewSensor,
};
