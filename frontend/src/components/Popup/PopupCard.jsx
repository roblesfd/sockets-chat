import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleAddFriend = () => {
  console.log("Añadido como amigo");
};

const PopupCard = ({ user }) => {
  const { photo, username } = user;
  return (
    <div className="border-primary-30 bg-primary-500 dark:border-primary-40 text-primary-30  dark:bg-primary-400 rounded pb-4 shadow-lg min-w-64 max-w-64 h-[245px]">
      <div className="relative bg-blue-500 rounded-t h-24">
        <img
          src={photo}
          className="absolute inset-x-0 -bottom-8 mx-auto bg-white w-24 h-24 rounded-full shadow-lg"
        />
      </div>

      <div className="pt-12 text-center ">
        <h3 className="text-lg font-semibold">{username}</h3>
        <button
          onClick={handleAddFriend}
          className="mt-4 bg-secondary-500 hover:bg-secondary-400 text-white py-2 px-4 rounded-lg shadow"
        >
          <span className="mr-2">Enviar solicitud</span>
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
