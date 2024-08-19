import { useState } from "react";
import ServerMemberItem from "./ServerMemberItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faTrash,
  faUser,
  faUserMinus,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Dropdown from "@/components/Dropdown";
import ServerMemberCard from "@/components/Popup/PopupContainer";
import { v4 as uuidv4 } from "uuid";

const SidebarMemberList = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMemberCardOpen, setIsMemberCardOpen] = useState(false);
  let memberCard;

  const miembros = [
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
    {
      id: uuidv4(),
      username: "nombre",
      roles: "owner",
      avatar: "",
      status: "online",
    },
  ];
  const dropdownData = {
    button: (
      <button className="w-full text-primary-30  hover:text-primary-600 dark:hover:text-primary-30 hover:bg-primary-100 dark:hover:bg-primary-200 px-2 py-1 rounded-md ">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    ),
    options: [
      <>
        <Link to="#" className={`flex items-center justify-between gap-2`}>
          Ver Perfil
        </Link>
        <FontAwesomeIcon icon={faUser} className="text-md" />
      </>,
      <>
        <button className={`flex items-center justify-between gap-2`}>
          Silenciar
        </button>
        <FontAwesomeIcon icon={faVolumeMute} className="text-md" />
      </>,
      <>
        <button className={`flex items-center justify-between gap-2`}>
          Quitar silencio
        </button>
        <FontAwesomeIcon icon={faVolumeHigh} className="text-md" />
      </>,
      <>
        <button className={`flex items-center justify-between gap-2`}>
          Banear
        </button>
        <FontAwesomeIcon icon={faTrash} className="text-md" />
      </>,
      <>
        <button className={`flex items-center justify-between gap-2`}>
          Bloquear
        </button>
        <FontAwesomeIcon icon={faUserMinus} className="text-md" />
      </>,
      <>
        <div className={`flex items-center justify-between gap-2`}>
          Hacer moderador
        </div>
        <input type="checkbox" name="nombrar-mod" id="nombrar-mod" />
      </>,
    ],
  };

  const toggleDataDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleOpenMemberCard = () => {
    setIsMemberCardOpen(!isMemberCardOpen);
    memberCard = <ServerMemberCard />;
  };

  return (
    <div
      className={`flex h-full w-full transition-width duration-300 bg-primary-200 dark:bg-primary-400 text-white dark:text-primary-30`}
    >
      <div className="flex flex-col w-full relative">
        <div className="mt-4 px-2">
          <h3>Miembros</h3>
          {/* lista de miembros */}
          <div className="mb-4 mt-2 overflow-y-scroll h-[570px]">
            <ul className="text-primary-90">
              {miembros.map((miembro, index) => (
                <li key={index} className="">
                  <ServerMemberItem
                    member={miembro}
                    textColor={"primary-30"}
                    bgColor={"primary-300"}
                    options={<Dropdown data={dropdownData} />}
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* display card member */}
          <div>{isMemberCardOpen && memberCard}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMemberList;
