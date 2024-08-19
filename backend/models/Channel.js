const mongoose = require("mongoose");

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

const channelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      alias: "channelName",
      match: [/^[a-zA-Z0-9]+$/, "Solo letras y/o números"],
    },
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Server",
      required: [true, "El servidor es obligatorio"],
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    permissions: {
      type: Map,
      of: Boolean,
      default: defaultPermissions,
    },
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
    virtuals: {
      // Retorna todos los permisos que son true
      permissionsSummary: {
        get() {
          const summary = [];
          this.permissions.forEach((value, key) => {
            if (value) {
              summary.push(key);
            }
          });
          return summary;
        },
      },
    },
  }
);

module.exports = mongoose.model("Channel", channelSchema);
