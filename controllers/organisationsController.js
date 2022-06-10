const organisationService = require("../services/organisationsService");

const getAllOrganisations = (req, res) => {
  try {
    const allOrga = organisationService.getAllOrganisations();
    res.status(201).send({ status: "OK", data: allOrga });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};

const getOneOrganisation = (req, res) => {
  const organisationId = req.params.organisationId;
  try {
    const orga = organisationService.getOneOrganisation(organisationId);
    res.status(201).send({ status: "OK", data: orga });
  } catch (error) {
    res
      .status(error || 500)
      .send({ status: "FAILED", data: { error: message || error } });
  }
};

const createOrganisation = (req, res) => {
  console.log("controller orga");
  const { body } = req;
  if (!body.name) {
    return;
  }
  const newOrganisation = {
    name: body.name,
  };
  try {
    const createOrga =
      organisationService.createNewOrganisation(newOrganisation);
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
