const organisationService = require("../services/organisationsService");

const getAllOrganisations = (req, res) => {
  const allOrga = organisationService.getAllOrganisations();
  res.status(201).send({ status: "OK", data: allOrga });
};

const getOneOrganisation = (req, res) => {
  console.log("req:", req.params);
  //faire des traitements
  const organisationId = req.params.organisationId;
  const orga = organisationService.getOneOrganisation(organisationId);
  res.status(201).send({ status: "OK", data: orga });
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
  const createOrga = organisationService.createNewOrganisation(newOrganisation);
  res.status(201).send({ status: "OK", data: createOrga });
};

module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createOrganisation,
};
