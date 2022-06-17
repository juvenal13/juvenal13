class SensorsDto {
  constructor(_row) {
    this.row = _row;
  }
  id() {
    return this.row.id;
  }
  name() {
    return this.row.name;
  }
  organisation() {
    return this.row.organisation;
  }
  brand() {
    return this.row.brand;
  }
  model() {
    return this.row.model;
  }
}

module.exports = SensorsDto;
