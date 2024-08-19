const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Rutas de archivos
router
  .route("/")
  .post(notificationController.createNotification)
  .get(notificationController.getNotifications);

router
  .route("/:id")
  .get(notificationController.getNotificationById)
  .delete(notificationController.deleteNotification);

module.exports = router;
