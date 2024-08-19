import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServerMemberItem from "../ServerMemberItem";
import { faEllipsis, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const miembros = [
  {
    username: "nombre",
    roles: "owner",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "",
    avatar: "",
    status: "online",
  },
  {
    username: "nombre",
    roles: "mod",
    avatar: "",
    status: "online",
  },
];

const dropdownData = {
  button: (
    <button className="w-full text-primary-600   dark:hover:text-primary-30 hover:bg-primary-50 dark:hover:bg-primary-200 px-2 py-1 rounded-md ">
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
    // <>
    //   {function silenceButtons(member)  {
    //     return (
    //       <>
    //         <Link to="#" className={`flex items-center justify-between gap-2`}>
    //           {member.silent ? "Quitar silencio" : "Silenciar"}
    //         </Link>
    //         <FontAwesomeIcon
    //           icon={member.silent ? faVolumeXmark : faVolumeHigh}
    //           className="text-md"
    //         />
    //       </>
    //     );
    //   }}
    // </>,
    <>
      <Link to="#" className={`flex items-center justify-between gap-2`}>
        Remover
      </Link>
      <FontAwesomeIcon icon={faTrash} className="text-md" />
    </>,
  ],
};

const handleUnbanUserClick = () => {
  console.log("Desbaneado");
};

const desbanearButton = (
  <button
    className="text-primary-30  bg-primary-400 hover:bg-primary-500 dark:bg-primary-200  rounded px-2 py-1 text-xs"
    title="Desbanear"
    onClick={handleUnbanUserClick}
  >
    Desbanear
  </button>
);

const ServerConfigurationMembers = () => {
  return (
    <div>
      <section name="members-list" className="mb-12">
        <h3 className="text-lg mb-4">Miembros del servidor</h3>
        <ul className="dark:text-primary-30 w-full md:w-2/3">
          {miembros.map((miembro, index) => (
            <li key={index} className="">
              <ServerMemberItem
                member={miembro}
                textColor={"primary-30"}
                bgColor={"primary-600"}
                dropdownData={dropdownData}
              />
            </li>
          ))}
        </ul>
      </section>
      <section name="banned-users-list" className="mb-12">
        <h3 className="text-lg mb-4">Usuarios baneados</h3>
        <ul className="text-primary-90 w-full md:w-2/3">
          {miembros.map((miembro, index) => (
            <li key={index} className="">
              <ServerMemberItem
                member={miembro}
                textColor={"primary-30"}
                bgColor={"primary-600"}
                options={desbanearButton}
              />
            </li>
          ))}
        </ul>
      </section>
      <section name="invite-members" className="mb-12">
        <h3 className="text-lg mb-4">Invitar miembros</h3>
        <div></div>
      </section>
    </div>
  );
};

export default ServerConfigurationMembers;
