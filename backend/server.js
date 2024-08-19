require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3500;
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");

/* TODO: 
-logger
-errorHandler 
-conexiondb x
-limite de archivos subida x
-permitir subir archivos json x
-permitir el uso de cookies x
-configurar ruta de archivos estaticos x
-configurar rutas x 
-manejo de 404 x
-manejo de eventos conexion db -
-manejo de cors x
*/

connectDB();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "6mb" }));
app.use(express.urlencoded({ limit: "6mb", extended: true }));
app.use("/", express.static(path.join(__dirname, "public")));

// Rutas
app.use("/auth", require("./routes/authRoutes"));
app.use("/canales", require("./routes/channelRoutes"));
app.use("/archivos", require("./routes/fileRoutes"));
app.use("/invitaciones", require("./routes/invitationRoutes"));
app.use("/mensajes", require("./routes/messageRoutes"));
app.use("/notificaciones", require("./routes/notificationRoutes"));
app.use("/roles", require("./routes/roleRoutes"));
app.use("/servidores", require("./routes/serverRoutes"));
app.use("/usuarios", require("./routes/userRoutes"));

// Respuesta para rutas no encontradas/validas
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Página no encontrada" });
  } else {
    res.type("txt".send("404 Página no encontrada"));
  }
});

mongoose.connection.once("open", () => {
  console.log("Conectado a MongoDB");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.use(errorHandler);
