import FriendCard from "@/components/FriendCard";
import ExploreHero from "./ExploreHero";

const user = {
  name: "John Doe",
  profilePicture: "https://via.placeholder.com/150", // Reemplaza con la URL real de la foto de perfil
};

const ExploreFriends = () => {
  return (
    <main className=" mb-16">
      {/* hero */}
      <section></section>
      <ExploreHero
        title="Bienvenido a Explorar maigos"
        textHero="Explora contenido increíble y encuentra los amigos que necesitas"
      />
      {/* explorar items grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5 overflow-x-scroll py-3 mt-6">
        <div className="col-span-3">
          <h3 className=" text-2xl font-semibold ">Explorar usuarios</h3>
        </div>
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
        <FriendCard user={user} />
      </section>
    </main>
  );
};

export default ExploreFriends;
