const organisationService = require("../services/organisationsService");

const getAllOrganisations = async (req, res) => {
  try {
    const allOrga = await organisationService.getAllOrganisations();
    res.status(201).send({ status: "OK", data: allOrga });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};

const getOneOrganisation = async (req, res) => {
  const organisationId = req.params.organisationId;
  try {
    const orga = await organisationService.getOneOrganisation(organisationId);
    res.status(201).send({ status: "OK", data: orga });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
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
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};

module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createOrganisation,
};
