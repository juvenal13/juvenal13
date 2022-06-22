const sensorService = require("../services/sensorsService");
const getAllSensors = async (req, res) => {
  try {
    const allSensors = await sensorService.getAllSensors();
    res.status(201).send({ status: "OK", data: allSensors });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
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
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
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
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
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
  console.log("body", body);
  try {
    const updatedSensor = await sensorService.updateOneSensor(sensorId, body);
    res.status(201).send({ status: "OK", data: updatedSensor });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};
const deleteSensor = async (req, res) => {
  const {
    params: { sensorId },
  } = req;
  if (!sensorId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':sensorId' can not be empty" },
    });
  }
  try {
    sensorService.deleteOneSensor(sensorId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};

const postSensorInOrga = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.organisation || !body.brand || !body.model) {
    return;
  }
  try {
    //recup l'orga
    const orga = await sensorService.getOrgaByName(body.organisation);

    //recup le sensortype
    const sensortype = await sensorService.getSensortypeByField(
      body.brand,
      body.model
    );
    //remplir le sensor
    const newSensor = {
      name: body.name,
      organisationId: orga[0].id,
      sensorTypeId: sensortype[0].id,
    };
    const createSensor = await sensorService.createNewSensor(newSensor);
    res.status(201).send({ status: "OK", data: createSensor });
    //creer le sensor
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};

const getAllSensorsInOrga = async (req, res) => {
  try {
    const allSensors = await sensorService.getAllSensors();
    const allSensorsinOrg = [];
    for (sensor of allSensors) {
      allSensorsinOrg.push(await sensorService.getSensorInOrga(sensor.id));
    }
    res.status(201).send({ status: "OK", data: allSensorsinOrg });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};

module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
  createsensor,
  updateSensor,
  deleteSensor,
  getAllSensorsInOrga,
  postSensorInOrga,
};
