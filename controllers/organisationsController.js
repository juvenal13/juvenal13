const getAllOrganisations = (req, res) => {
  res.send("Get all workouts");
};

const getOneOrganisation = (req, res) => {
  res.send("Get an existing workout");
};

const createOrganisation = (req, res) => {
  res.send("Create a new workout");
};

module.exports = {
  getAllOrganisations,
  getOneOrganisation,
  createOrganisation,
};
