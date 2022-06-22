const organisationService = require("../services/organisationsService");

const getAllOrganisations = async (req, res) => {
  try {
    const allOrga = await organisationService.getAllOrganisations();
    res.status(201).send({ status: "OK", data: allOrga });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};

const getOneOrganisation = async (req, res) => {
  const organisationId = req.params.organisationId;
  try {
    const orga = await organisationService.getOneOrganisation(organisationId);
    res.status(201).send({ status: "OK", data: orga });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};

const createOrganisation = async (req, res) => {
  const { body } = req;
  if (!body.name) {
    return;
  }
  const newOrganisation = {
    name: body.name,
  };
  try {
    const createOrga = await organisationService.createNewOrganisation(
      newOrganisation
    );
    res.status(201).send({ status: "OK", data: createOrga });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};
const updateOrganisation = async (req, res) => {
  const {
    body,
    params: { organisationId },
  } = req;
  if (!organisationId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':sensorId' can not be empty" },
    });
  }
  try {
    const updatedOrganisation = await organisationService.updateOneOrganisation(
      organisationId,
      body
    );
    res.status(201).send({ status: "OK", data: updatedOrganisation });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};
const deleteOrganisation = async (req, res) => {
  const {
    params: { organisationId },
  } = req;

  //const organisationId = req.params.organisationId;
  if (!organisationId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':organisationId' can not be empty" },
    });
  }
  try {
    await organisationService.deleteOneOrganisation(organisationId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res.status(error || 500).send({ status: "FAILED", data: { error: error } });
  }
};
module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createOrganisation,
  deleteOrganisation,
  updateOrganisation,
};
