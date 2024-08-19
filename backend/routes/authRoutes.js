const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimiter");

router.route("/").post(loginLimiter, authController.login);
router.route("/refresh").get(authController.refresh);
router.route("/logout").post(authController.logout);
router.route("/confirmar/:token").get(authController.confirm);
router
  .route("/recuperacion-de-contrasena")
  .post(authController.passwordRecovery);
router
  .route("/reestablecer-contrasena/:token")
  .post(authController.establishNewPassword);

module.exports = router;
