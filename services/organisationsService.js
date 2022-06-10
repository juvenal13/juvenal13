const OrganisationsModel = require("../models/organisationsModel");
const organisationModel = new OrganisationsModel();
const getAllOrganisations = () => {
  try {
    return organisationModel.all();
  } catch (error) {
    throw error;
  }
};

const getOneOrganisation = (organisationId) => {
  try {
    return organisationModel.findById(organisationId);
  } catch (error) {
    throw error;
  }
};

const createNewOrganisation = (newOrganisation) => {
  try {
    organisationModel.name = newOrganisation.name;
    return organisationModel.create();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createNewOrganisation,
};
