const express = require("express");
const organisationController = require("../controllers/organisationsController");
const router = express.Router();

router.get("/", organisationController.getAllOrganisations);

router.get("/:organisationId", organisationController.getOneOrganisation);

router.post("/", organisationController.createOrganisation);

router.delete(
  "/delete/:organisationId",
  organisationController.deleteOrganisation
);

router.put(
  "/update/:organisationId",
  organisationController.updateOrganisation
);
module.exports = router;
