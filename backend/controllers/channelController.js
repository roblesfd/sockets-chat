const Channel = require("../models/Channel");
const Server = require("../models/Server");

// @desc Crea un canal
// @route POST /canales/
// @access Private
const createChannel = async (req, res) => {
  try {
    const { server } = req.body;

    // Verificar si el servidor existe
    const serverExists = await Server.findById(server);
    if (!serverExists) {
      return res.status(404).json({ message: "Servidor no encontrado" });
    }

    const channel = new Channel(req.body);
    await channel.save();
    res.status(201).json(channel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene Obtener todos los canales
// @route GET /canales/
// @access Private
const getChannels = async (req, res) => {
  try {
    const channels = await Channel.find()
      .populate("server")
      .populate("messages");
    res.status(200).json(channels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtener un canal por ID
// @route GET /canales/:id
// @access Private
const getChannelById = async (req, res) => {
  const { id } = req.params.id;
  try {
    const channel = await Channel.findById(id)
      .populate("server")
      .populate("messages");

    if (!channel) {
      return res.status(404).json({ message: "Canal no encontrado" });
    }

    res.status(200).json(channel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Actualizar un canal por ID
// @route PATCH /canales/:id
// @access Private
const updateChannel = async (req, res) => {
  const { id } = req.params.id;

  try {
    const channel = await Channel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!channel) {
      return res.status(404).json({ message: "Canal no encontrado" });
    }

    res.status(200).json({ message: "Canal actualizado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Eliminar un canal
// @route DELETE /canales/:id
// @access Private
const deleteChannel = async (req, res) => {
  const { id } = req.params.id;

  try {
    const channel = await Channel.findByIdAndDelete(id);

    if (!channel) {
      return res.status(404).json({ message: "Canal no encontrado" });
    }

    res.status(200).json({ message: "Canal eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createChannel,
  getChannels,
  getChannelById,
  updateChannel,
  deleteChannel,
};
