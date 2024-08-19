const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

// Rutas de servidores
router.route("/").post(roleController.createRole).get(roleController.getRoles);

router.route("/:id").get(roleController.getRoleById);

module.exports = router;
