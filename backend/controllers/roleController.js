const Role = require("../models/Role");

// @desc Crea un rol
// @route POST /roles/
// @access Private
const createRole = async (req, res) => {
  try {
    const { roleType } = req.body;
    // Verificar si el rol existe
    const roleExists = await Role.findOne({ roleType });
    if (roleExists) {
      return res.status(400).json({ message: "El Rol ya existe" });
    }

    const role = new Role(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtiene todos los roles
// @route GET /roles/
// @access Private
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Obtener un role por ID
// @route GET /roles/:id
// @access Private
const getRoleById = async (req, res) => {
  const { id } = req.params.id;
  try {
    const role = await Role.findById(id);

    if (!role) {
      return res.status(404).json({ message: "role no encontrado" });
    }

    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createRole,
  getRoles,
  getRoleById,
};
