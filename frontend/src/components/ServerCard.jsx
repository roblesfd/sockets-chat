import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleAddServer = () => {
  console.log("Añadido como amigo");
};

const ServerCard = ({ server }) => {
  return (
    <div className=" border-primary-30 dark:border-primary-40 text-primary-600 dark:text-primary-30  dark:bg-primary-400 rounded pb-4 shadow-lg min-w-64 max-w-64 h-[245px] ">
      <div className="relative  rounded-t h-32 bg-blue-500"></div>
      <div className="pt-2 px-3 text-center">
        <h3 className="text-lg font-semibold  text-left ">{server.name}</h3>
        <p className="text-xs text-secondary-300 dark:text-secondary-100 text-left">
          {server.members}
        </p>
        <button
          onClick={handleAddServer}
          className="mt-4 bg-secondary-500 hover:bg-secondary-400 text-white py-2 px-4 rounded-lg shadow"
        >
          <span className="mr-2">Unirme</span>
          <FontAwesomeIcon icon={faSquareArrowUpRight} />
        </button>
      </div>
    </div>
  );
};

export default ServerCard;
