const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.route("/").post(fileController.createFile).get(fileController.getFiles);

router
  .route("/:id")
  .get(fileController.getFileById)
  .delete(fileController.deleteFile);

module.exports = router;
