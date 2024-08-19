const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      alias: "permissionName",
      match: [/^[a-zA-Z0-9]+$/, "Solo letras y/o números"],
    },
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Server",
      required: [true, "El servidor es obligatorio"],
    },
    permissions: [
      {
        type: Boolean,
        default: false,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    virtuals: {},
  }
);

const defaultPermissions = {
  viewChannel: true,
  sendMessages: true,
  manageMessages: false,
  manageChannel: false,
  connect: true,
  moveMembers: false,
  pinMessages: false,
  mentionEveryone: false,
  attachFiles: true,
  addReactions: true,
  managePermissions: false,
};

module.exports = mongoose.model("Permission", permissionSchema);
