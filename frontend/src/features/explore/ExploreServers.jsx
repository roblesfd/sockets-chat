import ServerCard from "@/components/ServerCard";
import ExploreHero from "./ExploreHero";

const server = {
  name: "Nombre servidor",
  profilePicture: "https://via.placeholder.com/150", // Reemplaza con la URL real de la foto de perfil
  members: "16 miembros",
};

const ExploreServers = () => {
  return (
    <main className=" mb-16">
      {/* hero */}
      <section></section>
      <ExploreHero
        title="Bienvenido a Nuestro Servicio"
        textHero="Explora contenido increíble y encuentra lo que necesitas"
      />
      {/* explorar items grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5 overflow-x-scroll py-3 mt-6">
        <div className="col-span-3">
          <h3 className=" text-2xl font-semibold ">Comunidades destacadas</h3>
        </div>
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
        <ServerCard server={server} />
      </section>
    </main>
  );
};

export default ExploreServers;
