const getAllSensors = (req, res) => {
  res.send("Get all workouts");
};

const getSensorsByOrganisationId = (req, res) => {
  res.send("Get an existing workout");
};

module.exports = {
  getAllSensors,
  getSensorsByOrganisationId,
};
