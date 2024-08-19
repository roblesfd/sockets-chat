import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className={`flex h-full w-full transition-width duration-300 bg-primary-300 dark:bg-primary-800`}
    >
      <div className="w-full">
        <div className="mt-4 px-2">
          <ul className="space-y-4 text-white flex flex-col items-center">
            {/* Inicio */}
            <li>
              <Link
                to="/inicio"
                className={`flex items-center justify-center rounded-full h-16 w-16  p-2 bg-primary-400 hover:bg-primary-200`}
                title="Inicio"
              >
                <FontAwesomeIcon icon={faHome} className="w-full text-xl" />
              </Link>
            </li>
            {/* servidores */}
            <li>
              <Link
                to="/servidores/10/canales/12"
                className={`flex items-center justify-center rounded-full h-16 w-16 p-2 bg-primary-400 hover:bg-primary-200`}
                title="Servidor"
              >
                SR
              </Link>
            </li>
            <li>
              <Link
                to="/servidores/10/canales/12"
                className={`flex items-center justify-center rounded-full h-16 w-16 p-2 bg-primary-400 hover:bg-primary-200`}
                title="Servidor"
              >
                SR
              </Link>
            </li>
            <li>
              <Link
                to="/servidores/10/canales/12"
                className={`flex items-center justify-center rounded-full h-16 w-16 p-2 bg-primary-400 hover:bg-primary-200`}
                title="Servidor"
              >
                SR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
