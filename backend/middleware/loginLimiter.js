const rateLimit = require("express-rate-limit");
const { logEvents } = require("./logger");

const loginLimiter = rateLimit({
  windowMs: 60 * 1000 * 5,
  max: 4,
  message: {
    message:
      "Haz hecho demasiados intentos de inicio de sesión. Intenta de nuevo en 5 minutos",
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Demasiados requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      "errLog.log"
    );
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = loginLimiter;
