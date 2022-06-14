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
const updateOneOrganisation = (organisationId, changes) => {
  try {
    organisationModel.id = organisationId;
    organisationModel.name = changes.name;

    const updatedsensor = organisationModel.update();
    return updatedsensor;
  } catch (error) {
    throw error;
  }
};

const deleteOneOrganisation = (organisationId) => {
  try {
    organisationModel.delete(organisationId);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createNewOrganisation,
  updateOneOrganisation,
  deleteOneOrganisation,
};
