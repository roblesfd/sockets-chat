const File = require("../models/File");
const User = require("../models/User");
const Channel = require("../models/Channel");

// @desc Crea un archivo
// @route POST /archivos
// @access Private
const createFile = async (req, res) => {
  try {
    const { filename, url, size, owner, channel } = req.body;

    // Verificar si el usuario existe
    if (owner) {
      const userExists = await User.findById(owner);
      if (!userExists) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
    }

    // Verificar si el canal existe
    if (channel) {
      const channelExists = await Channel.findById(channel);
      if (!channelExists) {
        return res.status(404).json({ message: "Canal no encontrado" });
      }
    }

    const file = new File({ filename, url, size, owner, channel });
    await file.save();
    res.status(201).json(file);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene todos los archivos
// @route GET /archivos
// @access Private
const getFiles = async (req, res) => {
  try {
    const files = await File.find().populate("owner").populate("channel");
    if (!files) {
      res.status(404).json({ message: "No hay archivos" });
    }
    res.status(200).json(files);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene un archivo por ID
// @route GET /archivos/:id
// @access Private
const getFileById = async (req, res) => {
  const { id } = req.params.id;
  try {
    const file = await File.findById(id).populate("owner").populate("channel");

    if (!file) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }

    res.status(200).json(file);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Actualiza datos de archivo
// @route PATCH /archivos/:id
// @access Private
// const updateFile = async (req, res) => {
//   try {
//     const { filename, url, size, owner, channel } = req.body;

//     // Verificar si el archivo existe
//     const fileExists = await File.findById(owner);
//     if (!fileExists) {
//       return res.status(404).json({ message: "Archivo no encontrado" });
//     }

//     // Verificar si el canal existe
//     if (channel) {
//       const channelExists = await Channel.findById(channel);
//       if (!channelExists) {
//         return res.status(404).json({ message: "Canal no encontrado" });
//       }
//     }

//     // Verificar si el usuario existe
//     if (owner) {
//       const ownerExists = await User.findById(owner);
//       if (!ownerExists) {
//         return res
//           .status(404)
//           .json({ message: "Dueño del archivo no encontrado" });
//       }
//     }

//     const file = await File.findByIdAndUpdate(
//       req.params.id,
//       { filename, path, mimetype, size, owner, channel },
//       { new: true }
//     )
//       .populate("owner")
//       .populate("channel");

//     if (!file) {
//       return res.status(404).json({ message: "Archivo no encontrado" });
//     }

//     res.status(200).json(file);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// @desc Elimina un archivo
// @route DELETE /archivos/:id
// @access Private
const deleteFile = async (req, res) => {
  const { id } = req.params.id;
  try {
    const file = await File.findByIdAndDelete(id);

    if (!file) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }

    res.status(200).json({ message: "Archivo eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createFile, getFiles, getFileById, deleteFile };
