const express = require("express");
const router = express.Router();
const channelController = require("../controllers/channelController");

router
  .route("/")
  .post(channelController.createChannel)
  .get(channelController.getChannels);

router
  .route("/:id")
  .get(channelController.getChannelById)
  .put(channelController.updateChannel)
  .delete(channelController.deleteChannel);

module.exports = router;
