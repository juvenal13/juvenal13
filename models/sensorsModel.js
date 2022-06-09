const Model = require("./model");
class SensorsModel extends Model {
  constructor() {
    super();
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
  sensortypeId() {
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
  sensortypeId(_sensorTypeId) {
    this.sensorTypeId = _sensorTypeId;
  }
}

module.exports = SensorsModel;
