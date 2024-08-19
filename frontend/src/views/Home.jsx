import { Link } from "react-router-dom";
import FriendCard from "../components/FriendCard";
import ServerCard from "../components/ServerCard";
import CardSimple from "../components/CardSimple";

const user = {
  name: "John Doe",
  profilePicture: "https://via.placeholder.com/150", // Reemplaza con la URL real de la foto de perfil
};

const server = {
  name: "Nombre servidor",
  profilePicture: "https://via.placeholder.com/150", // Reemplaza con la URL real de la foto de perfil
  members: "16 miembros",
};

const ultimo = [
  {
    title: "Nombre del servidor",
    subtitle: "16 mensajes de usuario",
    linkText: "Nombre del canal",
  },
];

const Home = () => {
  return (
    <div className="px-4 py-6 md:py-10">
      {/* seccion 1 mensajes nuevos/mis servidores*/}
      <section className="pb-12 pt-6 h-auto w-auto  border-b-2">
        <h2 className="text-xl mb-12">Actividad reciente en chats</h2>
        {/* lista de actividades (mensajes y notificaciones) */}
        <div className="w-full flex flex-row flex-nowrap space-x-5 overflow-scroll">
          {/* actividad */}
          {ultimo.map((cardData, index) => {
            return <CardSimple key={index} data={cardData} />;
          })}
        </div>
      </section>
      {/* seccion 2  mensajes nuevos/mis servidores*/}
      <section className="pb-12 pt-6 h-auto  border-b-2">
        <h2 className="text-xl mb-12">Últimas notificaciones</h2>
        <div className="w-full flex flex-row flex-nowrap space-x-5 overflow-scroll">
          {ultimo.map((cardData, index) => {
            return <CardSimple key={index} data={cardData} />;
          })}
        </div>
      </section>

      {/* seccion 3 explorar amigos*/}
      <section className="py-12 my-10 border-b-2 h-auto ">
        <h2 className="text-xl mb-12">Explorar amigos</h2>
        <div className="w-full mt-12 flex flex-row flex-nowrap space-x-5 overflow-scroll md:h-[300px]">
          <FriendCard user={user} />
          <FriendCard user={user} />
          <FriendCard user={user} />
          <FriendCard user={user} />
          <FriendCard user={user} />
        </div>
      </section>

      {/* seccion 3 explorar servidores*/}
      <section className="py-12 my-10 border-b-2 h-auto ">
        <h2 className="text-xl mb-12">Explorar servidores</h2>
        <div className="w-full mt-12 flex flex-row flex-nowrap space-x-5 overflow-scroll md:h-[300px]">
          <ServerCard server={server} />
          <ServerCard server={server} />
          <ServerCard server={server} />
          <ServerCard server={server} />
          <ServerCard server={server} />
          <ServerCard server={server} />
        </div>
      </section>
    </div>
  );
};

export default Home;
