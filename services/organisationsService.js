const OrganisationsModel = require("../models/organisationsModel");
const organisationModel = new OrganisationsModel();
const getAllOrganisations = () => {
  return organisationModel.all();
};

const getOneOrganisation = (organisationId) => {
  return organisationModel.findById(organisationId);
};

const createNewOrganisation = (newOrganisation) => {
  organisationModel.name = newOrganisation.name;

  return organisationModel.create();
};

module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createNewOrganisation,
};
