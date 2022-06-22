class sensorandstDto {
  constructor(_row) {
    this.row = _row;
  }

  id() {
    return this.row.id;
  }
  name() {
    return this.row.name;
  }
  brand() {
    return this.row.brand;
  }
  model() {
    return this.row.model;
  }
  sensortypeId() {
    return this.row.sensortypeId;
  }
}
module.exports = sensorandstDto;
