const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: [true, "El nombre del archivo es requerido"],
  },
  url: {
    type: String,
    required: [true, "La URL es requerida"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "El usuario es requerido"],
  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
    required: [true, "El canal es requerido"],
  },
  size: {
    type: Number,
    required: [true, "El tamaño del archivo es requerido"],
    min: [10, "El tamaño del archivo debe ser mayor o igual a 100KB"],
    max: [10000, "El tamaño del archivo no debe ser mayor a 10MB"],
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("File", fileSchema);
