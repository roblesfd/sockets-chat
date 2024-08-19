const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema({
  // code: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  server: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Server",
    required: true,
  },
  // expiresAt: {
  //   type: Date,
  // },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  invitedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Invitation", invitationSchema);
