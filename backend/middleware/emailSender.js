const nodemailer = require("nodemailer");

const emailConfirmacion = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const { username, email, token } = datos;

  await transport.sendMail({
    from: "Socket Chat",
    to: email,
    subject: "Confirma tu cuenta de SocketChat.com",
    text: "Confirma tu cuenta de SocketChat.com",
    html: `
        <p>Hola ${username}, confirma tu cuenta en socketschat.com</p>
        <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta </a>
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, username, token } = datos;

  await transport.sendMail({
    from: "Sockets chat",
    to: email,
    subject: "Reestablece tu contraseña de socketschat.com",
    text: "Reestablece tu contraseña en socketschat.com",
    html: `
            <p>Hola ${username}, has solicitado reestablecer tu contraseña en socketschat.com</p>
            <p>Haz click en el siguiente enlace para generar una contraseña nueva
            <a href="${process.env.FRONTEND_URL}/contrasena-nueva/${token}">Reestablecer contraseña</a>
            <p>Si tu no solicitaste el cambio de contraseña puedes  ignorar este correo.</p>
        `,
  });
};

module.exports = { emailConfirmacion, emailOlvidePassword };
