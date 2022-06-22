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
    // return sensorModel.findById(organisationId, "organisationId");
    return sensorModel.getSensorAndStByorgId(organisationId);
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
const updateOneSensor = async (sensorId, changes) => {
  console.log("changes:", changes);
  const organisationModel = new OrganisationsModel();
  const sensortypesModel = new SensortypesModel();
  sensorModel.id = sensorId;
  sensorModel.name = changes.name;
  sensortypesModel.brand = changes.brand;
  sensortypesModel.model = changes.model;
  organisationModel.name = changes.organisation;
  try {
    // recup le sensor
    const sensor = await sensorModel.findById(sensorId);
    organisationModel.id = sensor[0].organisationId;
    sensortypesModel.id = sensor[0].sensorTypeId;
    // modif l'orga
    organisationModel.update();
    // update le sensortype
    sensortypesModel.update();
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

const getSensorInOrga = (sensorId) => {
  if (!sensorId) {
    throw error;
  }
  try {
    return sensorModel.getSensorInOrga(sensorId);
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
  getSensorInOrga,
};
