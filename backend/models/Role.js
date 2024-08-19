const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    roleType: {
      type: String,
      required: true,
      enum: ["admin", "moderator", "member"],
    },
    permissions: {
      type: Map,
      of: Boolean,
      default: {},
    },
    assignedTo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    virtuals: {
      assignedUserCount: {
        get() {
          return this.assignedTo.length;
        },
      },
    },
  }
);

const predefinedPermissions = {
  admin: {
    manageUsers: true,
    manageChannels: true,
    viewLogs: true,
    deleteMessages: true,
  },
  moderator: {
    manageUsers: true,
    manageChannels: false,
    viewLogs: true,
    deleteMessages: true,
  },
  member: {
    manageUsers: false,
    manageChannels: false,
    viewLogs: false,
    deleteMessages: false,
  },
};

roleSchema.pre("save", function (next) {
  if (this.isNew) {
    this.permissions = predefinedPermissions[this.name] || {};
  }
  next();
});

module.exports = mongoose.model("Role", roleSchema);
