const Model = require("./model");
class SensortypesModel extends Model {
  constructor() {
    super();
  }

  id() {
    return this.id;
  }
  brand() {
    return this.brand;
  }
  model() {
    return this.model;
  }

  id(_id) {
    this.id;
  }
  brand(_brand) {
    this.brand = _brand;
  }
  model(_model) {
    this.model = _model;
  }
}

module.exports = SensortypesModel;
