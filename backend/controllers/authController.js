const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const crypto = require("crypto");
const { emailOlvidePassword } = require("../middleware/emailSender");

// @desc Login
// @route POST /auth
// @access Public
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  const foundUser = await User.findOne({ username }).exec();

  if (!foundUser) {
    return res.status(401).json({ message: "Usuario no encontrado" });
  }

  if (!foundUser.accountStatus) {
    return res.status(401).json({ message: "Tu cuenta no esta activada" });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: "Contraseña incorrecta" });

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.username,
        roles: foundUser.roles,
        id: foundUser._id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { username: foundUser.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.json({ accessToken });
};

// @desc Refresh
// @route GET /auth/refresh
// @access Public
const refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt)
    return res.status(401).json({ message: "No tienes permiso" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Prohibido" });

      const foundUser = await User.findOne({
        username: decoded.username,
      }).exec();

      if (!foundUser)
        return res.status(401).json({ message: "No estas autorizado" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.username,
            roles: foundUser.roles,
            id: foundUser._id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      res.json({ accessToken });
    })
  );
};

// @desc Logout
// @route POST /auth/logout
// @access Public
const logout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(204);
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};
// @desc Confirm
// @route POST /auth/confirmar/:token
// @access Public
const confirm = async (req, res) => {
  const { token } = req.params;

  const user = await User.findOne({ token });

  if (!user) {
    return res.status(401).message({ message: "Error al confirmar la cuenta" });
  }

  user.token = null;
  user.active = true;
  await user.save();

  res.status(201).json({ message: "Tu cuenta ha sido confirmada" });
};

// @desc Recuperación de contraseña
// @route POST /auth/recuperacion-de-contrasena
// @access Public
const passwordRecovery = async (req, res) => {
  const { email } = req.body;

  try {
    const userObject = await User.findOne({ email });

    if (!userObject) {
      return res.status(401).json({
        message:
          "No existe una cuenta de usuario asociada a esta dirección de correo ",
      });
    }
    const token = crypto.randomBytes(20).toString("hex");
    userObject.token = token;
    const user = await userObject.save();

    if (user) {
      emailOlvidePassword({
        username: user.username,
        email: user.email,
        token: user.token,
      });
    }

    res.status(201).json({
      message:
        "Envíamos un correo con un enlace para reestablecer tu contraseña",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Establecer nueva contraseña
// @route POST /auth/reestablecer-contrasena/:token
// @access Public
const establishNewPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  console.log(token);
  console.log(password);

  const userObject = await User.findOne({ token });

  if (!userObject) {
    return res.status(401).json({ message: "Este enlace ya no es válido" });
  }

  userObject.password = password;
  userObject.token = null;
  const user = await userObject.save();
  if (user) {
    res.status(201).json({ message: "Tu contraseña se ha guardado" });
  } else {
    res.status(400).json({ message: "Error al cambiar la contraseña" });
  }
};

module.exports = {
  login,
  refresh,
  logout,
  confirm,
  passwordRecovery,
  establishNewPassword,
};
