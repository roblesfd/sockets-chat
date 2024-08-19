const Message = require("../models/Message");

// @desc Crea un mensaje
// @route POST /mensajes
// @access Private
const createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(Message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene todos los mensajes
// @route GET /mensajes
// @access Private
const getMessages = async (req, res) => {
  try {
    const Messages = await Message.find()
      .populate("roles")
      .populate("servers")
      .populate("friends")
      .select("-password");
    res.status(200).json(Messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene un mensaje
// @route GET /mensajes/:id
// @access Private
const getMessageById = async (req, res) => {
  const { id } = req.params;
  try {
    const Message = await Message.findById(id)
      .populate("roles")
      .populate("servers");
    if (!Message) {
      return res.status(404).json({ message: "mensaje no encontrado" });
    }
    res.status(200).json(Message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Actualiza datos de mensaje
// @route PATCH /mensajes/:id
// @access Private
const updateMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const Message = await Message.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!Message) {
      return res.status(404).json({ message: "mensaje no encontrado" });
    }
    res.status(200).json({ message: "mensaje actualizado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Elimina un mensaje
// @route DELETE /mensajes/:id
// @access Private
const deleteMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const Message = await Message.findByIdAndDelete(id);
    if (!Message) {
      return res.status(404).json({ message: "mensaje no encontrado" });
    }
    res.status(200).json({ message: "mensaje eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createMessage,
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};
