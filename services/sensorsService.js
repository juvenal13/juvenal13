const SensorsModel = require("../models/sensorsModel");
const OrganisationsModel = require("../models/organisationsModel");
const SensortypesModel = require("../models/sensortypesModel");
const sensorModel = new SensorsModel();
const getAllSensors = () => {
  try {
    return sensorModel.all();
  } catch (error) {
    throw error;
  }
};

const getSensorsByOrganisationId = (organisationId) => {
  try {
    return sensorModel.findById(organisationId, "organisationId");
  } catch (error) {
    throw error;
  }
};

const createNewSensor = (newSensor) => {
  try {
    sensorModel.name = newSensor.name;
    sensorModel.organisationId = newSensor.organisationId;
    sensorModel.sensorTypeId = newSensor.sensorTypeId;
    return sensorModel.create();
  } catch (error) {
    throw error;
  }
};
const updateOneSensor = (sensorId, changes) => {
  try {
    sensorModel.id = sensorId;
    sensorModel.name = changes.name;
    sensorModel.organisationId = changes.organisationId;
    sensorModel.sensorTypeId = changes.sensorTypeId;
    const updatedsensor = sensorModel.update();
    return updatedsensor;
  } catch (error) {
    throw error;
  }
};

const deleteOneSensor = (sensorId) => {
  try {
    sensorModel.delete(sensorId);
  } catch (error) {
    throw error;
  }
};

const getSensortypeByField = (brand, model) => {
  const sensortypesModel = new SensortypesModel();
  sensortypesModel.brand = brand;
  sensortypesModel.model = model;
  try {
    return sensortypesModel.findByCriteria();
  } catch (error) {
    throw error;
  }
};
const getOrgaByName = (organisationName) => {
  const organisationModel = new OrganisationsModel();
  organisationModel.name = organisationName;
  try {
    return organisationModel.findByCriteria();
  } catch (error) {
    throw error;
  }
};

const getAllSensorsInOrga = (sensorId) => {
  if (!sensorId) {
    throw error;
  }
  try {
    return sensorModel.getAllSensorsInOrga(sensorId);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
  createNewSensor,
  updateOneSensor,
  deleteOneSensor,
  getSensortypeByField,
  getOrgaByName,
  getAllSensorsInOrga,
};
