const jwt = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No tienes permiso" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Prohibido" });
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    req.id = decoded.UserInfo.id;
    next();
  });

  module.exports = verifyJWT;
};
