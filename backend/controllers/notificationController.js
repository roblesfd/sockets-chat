const Notification = require("../models/Notification");

// @desc Crea una notificacion
// @route POST /notificaciones
// @access Private
const createNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.mesage });
  }
};

// @desc Obtiene todas las notificaciones
// @route GET /notificaciones
// @access Private
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().populate("user");
    res.status(200).json(notifications);
  } catch (error) {
    res.status(400).json({ error: error.notification });
  }
};

// @desc Obtiene un notificacion
// @route GET /notificaciones/:id
// @access Private
const getNotificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findById(id).populate("user");
    if (!notification) {
      return res
        .status(404)
        .json({ notification: "Notificación no encontrada" });
    }
    res.status(200).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.notification });
  }
};

// @desc Elimina un notificacion
// @route DELETE /notificaciones/:id
// @access Private
const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await Notification.findByIdAndDelete(id);
    if (!notification) {
      return res
        .status(404)
        .json({ notification: "Notificación no encontrada" });
    }
    res.status(200).json({ message: "Notificación eliminada" });
  } catch (error) {
    res.status(400).json({ error: error.notification });
  }
};

module.exports = {
  createNotification,
  getNotifications,
  getNotificationById,
  deleteNotification,
};
