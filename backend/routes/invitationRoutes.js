const express = require("express");
const router = express.Router();
const invitationController = require("../controllers/invitationController");

// Rutas de archivos
router
  .route("/")
  .post(invitationController.createInvitation)
  .get(invitationController.getInvitations);

router
  .route("/:id")
  .get(invitationController.getInvitationById)
  .delete(invitationController.deleteInvitation);

module.exports = router;
