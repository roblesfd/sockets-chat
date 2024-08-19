import { useContext, useState } from "react";
import {
  faHashtag,
  faGear,
  faPlus,
  faCaretDown,
  faClose,
  faBell,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Dropdown from "@/components/Dropdown";
import ModalContext from "@/context/ModalContext";
import FormInvitePeople from "./forms/FormCreateChannel";
import FormCreateChannel from "./forms/FormCreateChannel";

const SidebarChannels = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { modal, setModal } = useContext(ModalContext);

  const toggleDataDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const dropdownData = {
    button: (
      <button className="w-full text-white hover:bg-primary-300 px-2 py-2 max-h-14 flex justify-between items-center rounded-md focus:outline-none">
        <span>Nombre servidor</span>
        <span>
          <FontAwesomeIcon icon={isUserDropdownOpen ? faClose : faCaretDown} />
        </span>
      </button>
    ),
    options: [
      <>
        <button
          className={`w-full flex items-center justify-between gap-2`}
          onClick={() => {
            setModal({
              isOpen: !modal.isOpen,
              content: (
                <FormInvitePeople
                  invitation={{
                    link: "https://sockets-chat.com/invitacion/c5b843DSF54",
                    expires: "7 días",
                  }}
                />
              ),
            });
          }}
        >
          Invitar gente
          <FontAwesomeIcon icon={faPeopleGroup} className="text-md" />
        </button>
      </>,
      <>
        <button
          className={`w-full flex items-center justify-between gap-2`}
          onClick={() =>
            (window.location.href = "/servidores/10/configuracion")
          }
        >
          Ajustes del servidor
          <FontAwesomeIcon icon={faGear} className="text-md" />
        </button>
      </>,
      <>
        <button
          className={`w-full flex items-center justify-between gap-2`}
          onClick={() => {
            setModal({
              isOpen: !modal.isOpen,
              content: <FormCreateChannel />,
            });
          }}
        >
          Crear canal
          <FontAwesomeIcon icon={faPlus} className="text-md" />
        </button>
      </>,
      <>
        <div className={`flex items-center justify-between gap-2`}>
          Silenciar servidor
        </div>
        <input type="checkbox" name="nombrar-mod" id="nombrar-mod" />
      </>,
    ],
  };

  return (
    <div
      className={`flex h-full w-full transition-width duration-300 bg-primary-200 dark:bg-primary-400 text-white dark:text-primary-30`}
    >
      <div className="flex flex-col w-full">
        {/* opciones servidor */}
        <div className="mt-4 px-2">
          <div>
            <div className="relative w-full mb-4">
              <Dropdown data={dropdownData} />
            </div>
          </div>
          {/* header canales */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-md">Canales</h3>
            <button
              className="cursor-pointer hover:text-primary-40"
              title="Crear canal"
              onClick={() =>
                setModal({
                  isOpen: !modal.isOpen,
                  content: <FormCreateChannel />,
                })
              }
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          {/* lista de canales */}
          <ul className="space-y-2  ">
            <li className="h-10 flex justify-between items-center hover:bg-primary-300 rounded  p-2   text-sm">
              <span>
                <FontAwesomeIcon icon={faHashtag} />
              </span>
              <Link
                to="/servidores/1/canales/1"
                className={`flex items-center justify-between gap-2`}
                title="NOMBRE CANAL"
              >
                NOMBRE CANAL
              </Link>
              <Link
                to="#"
                className={`flex items-center justify-between gap-2 hover:text-primary-40`}
                title="Configuración del canal"
              >
                <FontAwesomeIcon icon={faGear} className="text-md" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarChannels;
