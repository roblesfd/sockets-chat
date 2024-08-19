const Server = require("../models/Server");
const Channel = require("../models/Channel");
const User = require("../models/User");

// @desc Crea un servidor
// @route POST /servidores
// @access Private
const createServer = async (req, res) => {
  try {
    const { name, channels, users } = req.body;

    // Verificar si todos los canales existen
    if (channels && channels.length > 0) {
      const channelsExist = await Channel.find({ _id: { $in: channels } });
      if (channelsExist.length !== channels.length) {
        return res
          .status(404)
          .json({ message: "Uno o más canales no encontrados" });
      }
    }

    // Verificar si todos los usuarios existen
    if (users && users.length > 0) {
      const usersExist = await User.find({ _id: { $in: users } });
      if (usersExist.length !== users.length) {
        return res
          .status(404)
          .json({ message: "Uno o más usuarios no encontrados" });
      }
    }

    const server = new Server({ name, channels, users });
    await server.save();
    res.status(201).json(server);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene todos los servidores
// @route GET /servidores
// @access Private
const getServers = async (req, res) => {
  try {
    const servers = await Server.find().populate("channels").populate("users");
    res.status(200).json(servers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene un servidor por ID
// @route GET /servidores/:id
// @access Private
const getServerById = async (req, res) => {
  try {
    const server = await Server.findById(req.params.id)
      .populate("channels")
      .populate("users");

    if (!server) {
      return res.status(404).json({ message: "Servidor no encontrado" });
    }

    res.status(200).json(server);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Actualiza datos de servidor
// @route PATCH /servidores/:id
// @access Private
const updateServer = async (req, res) => {
  try {
    const { name, channels, users } = req.body;

    // Verificar si todos los canales existen
    if (channels && channels.length > 0) {
      const channelsExist = await Channel.find({ _id: { $in: channels } });
      if (channelsExist.length !== channels.length) {
        return res
          .status(404)
          .json({ message: "Uno o más canales no encontrados" });
      }
    }

    // Verificar si todos los usuarios existen
    if (users && users.length > 0) {
      const usersExist = await User.find({ _id: { $in: users } });
      if (usersExist.length !== users.length) {
        return res
          .status(404)
          .json({ message: "Uno o más usuarios no encontrados" });
      }
    }

    const server = await Server.findByIdAndUpdate(
      req.params.id,
      { name, channels, users },
      { new: true }
    )
      .populate("channels")
      .populate("users");

    if (!server) {
      return res.status(404).json({ message: "Servidor no encontrado" });
    }

    res.status(200).json(server);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Elimina un servidor
// @route DELETE /servidores/:id
// @access Private
const deleteServer = async (req, res) => {
  try {
    const server = await Server.findByIdAndDelete(req.params.id);

    if (!server) {
      return res.status(404).json({ message: "Servidor no encontrado" });
    }

    res.status(200).json({ message: "Servidor eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createServer,
  getServers,
  getServerById,
  updateServer,
  deleteServer,
};
