const organisationService = require("../services/organisationsService");

const getAllOrganisations = (req, res) => {
  const allOrga = organisationService.getAllOrganisations();
  res.send("Get all organisations");
};

const getOneOrganisation = (req, res) => {
  const orga = organisationService.getOneOrganisation();
  res.send("Get an existing organisation");
};

const createOrganisation = (req, res) => {
  const createOrga = organisationService.createNewOrganisation();
  res.send("Create a new workorganisationout");
};

module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createOrganisation,
};
