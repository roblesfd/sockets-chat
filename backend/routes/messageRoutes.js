const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// Rutas de archivos
router
  .route("/")
  .post(messageController.createMessage)
  .get(messageController.getMessages);

router
  .route("/:id")
  .get(messageController.getMessageById)
  .put(messageController.updateMessage)
  .delete(messageController.deleteMessage);

module.exports = router;
