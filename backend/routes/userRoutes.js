const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas de usuarios

router.route("/").post(userController.createUser).get(userController.getUsers);
router
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
