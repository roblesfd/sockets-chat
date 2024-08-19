const express = require("express");
const router = express.Router();
const serverController = require("../controllers/serverController");

// Rutas de servidores
router
  .route("/")
  .post(serverController.createServer)
  .get(serverController.getServers);

router
  .route("/:id")
  .get(serverController.getServerById)
  .put(serverController.updateServer)
  .delete(serverController.deleteServer);

module.exports = router;
