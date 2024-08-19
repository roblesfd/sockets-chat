const Invitation = require("../models/invitation");

// @desc Crea una invitacion
// @route POST /invitaciones
// @access Private
const createInvitation = async (req, res) => {
  try {
    const invitation = new Invitation(req.body);
    await invitation.save();
    res.status(201).json(invitation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene todas las invitaciones
// @route GET /invitaciones
// @access Private
const getInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.find()
      .populate("server")
      .populate("createdBy")
      .populate("invitedUser");

    res.status(200).json(invitations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene una invitacion
// @route GET /invitaciones/:id
// @access Private
const getInvitationById = async (req, res) => {
  const { id } = req.params;
  try {
    const invitation = await Invitation.findById(id)
      .populate("server")
      .populate("createdBy")
      .populate("invitedUser");

    if (!invitation) {
      return res.status(404).json({ message: "Invitacion no encontrada" });
    }
    res.status(200).json(invitation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Elimina una invitacion
// @route DELETE /invitaciones/:id
// @access Private
const deleteInvitation = async (req, res) => {
  const { id } = req.params;

  try {
    const invitation = await invitation.findByIdAndDelete(id);
    if (!invitation) {
      return res.status(404).json({ message: "invitacion no encontrada" });
    }
    res.status(200).json({ message: "invitacion eliminada" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInvitation,
  getInvitations,
  getInvitationById,
  deleteInvitation,
};
