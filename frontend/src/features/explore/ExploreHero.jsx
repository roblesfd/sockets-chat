import heroLandScape from "@/assets/hero-landscape.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ExploreHero = ({ title, textHero }) => {
  return (
    <div
      className="relative w-full h-[330px] bg-cover bg-bottom"
      style={{ backgroundImage: `url(${heroLandScape})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      {/* Overlay oscuro */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <p className="mt-4 text-sm md:text-md">{textHero}</p>

        <form className="mt-8 flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar..."
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button
            type="submit "
            className="hover:bg-primary-30 rounded-full p-3 flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExploreHero;
