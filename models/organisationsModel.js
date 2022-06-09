const Model = require("./model");
class OrganisationsModel extends Model {
  constructor() {
    super();
  }

  id() {
    return this.id;
  }
  name() {
    return this.name;
  }
  id(_id) {
    this.id = _id;
  }
  name(_name) {
    this.name = _name;
  }
}
module.exports = OrganisationsModel;
