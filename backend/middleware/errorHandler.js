const { logEvents } = require("./logger");

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${err.method}\t${req.url}${req.headers.origin}`,
    "errLog.log"
  );
  console.log(err.stack);
  const status = res.statusCode ? res.statusCode : 500;
  res.status(status);
  res.json({ message: err.message, isError: true });
};

module.exports = errorHandler;
