const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
      unique: [true, "Este nombre ya esta en uso"],
      minLength: [6, "El nombre de usuario debe tener al menos 6 carácteres"],
      maxLength: [20, "El nombre de usuario debe tener máximo 20 carácteres"],
    },
    name: {
      type: String,
      maxLength: [25, "El nombre debe tener máximo 25 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El correo electrónico es obligatorio"],
      match: [/^[a-zA-Z0-9]+@\S+\.\S+$/, "El correo electrónico no es válido"],
      unique: [true, "Y ahay una cuenta registrada con este correo"],
    },
    password: {
      type: String,
      required: [true, "La contraseña es requerida"],
      min: [8, "La contraseña debe de tener al menos 8 carácteres"],
      max: [25, "La contraseña debe de tener al menos 25 carácteres"],
    },
    accountStatus: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },
    age: {
      type: Number,
      min: [18, "La edad mínima es 18 años"],
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    servers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Server",
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    token: {
      type: String,
      default: null,
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
    statics: {
      findByUsername(name) {
        return this.find({ username: new Regexp(name, "i") });
      },
      findOnlineUsers() {
        return this.find({ status: "online" });
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.addFriend = async function (friendId) {
  if (!this.friends.includes(friendId)) {
    this.friends.push(friendId);
    await this.save();
  }
};

module.exports = mongoose.model("User", userSchema);
