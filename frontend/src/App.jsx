import { Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Home from "./views/Home";
import PasswordRecovery from "./features/auth/PasswordRecovery";
import CreatedAccount from "./features/auth/CreatedAccount";
import ConfirmAccount from "./features/auth/ConfirmAccount";
import MainLayout from "./components/MainLayout";
import Profile from "./features/profile/Profile";
import Server from "./features/server/Server";
import Chat from "./features/chat/Chat";
import ServerConfiguration from "./features/server/server-configuration/ServerConfiguration";
import ExploreFriends from "./features/explore/ExploreFriends";
import ExploreServers from "./features/explore/ExploreServers";
import NewPassword from "./features/auth/NewPassword";
import Prefetch from "./features/auth/Prefetch";

function App() {
  return (
    <Routes>
      <Route element={<Prefetch />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="inicio" element={<Home />} />
          <Route path="mi-perfil" element={<Profile />} />
          <Route path="servidores/:id" element={<Server />}>
            <Route path="canales/:id" element={<Chat />} />
            <Route path="configuracion" element={<ServerConfiguration />} />
          </Route>
          <Route path="explorar-amigos" element={<ExploreFriends />} />
          <Route path="explorar-servidores" element={<ExploreServers />} />
        </Route>
        <Route
          path="recuperacion-de-contrasena"
          element={<PasswordRecovery />}
        />
        <Route path="contrasena-nueva/:token" element={<NewPassword />} />
        <Route path="ingresar" element={<Login />} />
        <Route path="registrarse" element={<Signup />} />
        <Route path="cuenta-creada" element={<CreatedAccount />} />
        <Route path="confirmar/:token" element={<ConfirmAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
