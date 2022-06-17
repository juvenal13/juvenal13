const SensorsDto = require("../dto/sensorsDto");
const Model = require("./model");
class SensorsModel extends Model {
  constructor() {
    super();
  }
  async getAllSensorsInOrga(sensorId) {
    const req = await this.sqlQuery(
      `SELECT s.id, s.name, o.id organisationId, o.name organisation,st.id sensortypeId, st.brand, st.model
      FROM sensors s JOIN organisations o ON s.organisationId = o.id
      JOIN sensortypes st ON s.sensorTypeId = st.id
      WHERE s.id = ?`,
      sensorId
    );

    return new SensorsDto(req[0]);
  }
  id() {
    return this.id;
  }
  name() {
    return this.name;
  }
  organisationId() {
    return this.organisationId;
  }
  sensorTypeId() {
    return this.sensorTypeId;
  }

  id(_id) {
    this.id = _id;
  }
  name(_name) {
    this.name = _name;
  }
  organisationId(_organisationId) {
    this.organisationId = _organisationId;
  }
  sensorTypeId(_sensorTypeId) {
    this.sensorTypeId = _sensorTypeId;
  }
}

module.exports = SensorsModel;
