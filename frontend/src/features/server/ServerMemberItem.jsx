import {
  faCircle,
  faCrown,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PopupContext from "@/context/PopupContext";

const ServerMemberItem = ({ member, textColor, bgColor, options }) => {
  const { id, username, avatar, status, roles } = member;
  const { setPopup } = useContext(PopupContext);
  let roleIcon;

  if (roles === "mod") {
    roleIcon = <FontAwesomeIcon icon={faUserTie} />;
  } else if (roles == "owner") {
    roleIcon = <FontAwesomeIcon icon={faCrown} />;
  }

  const userAvatar = avatar ? (
    <img src={avatar} alt={username} />
  ) : (
    <FontAwesomeIcon icon={faUser} className="w-full text-xl" />
  );

  const handleClick = () => {
    const containerCoords = document.getElementById(id).getBoundingClientRect();
    setPopup({
      isPopupOpen: true,
      content: member,
      eventGeneratorCoords: containerCoords,
    });
  };

  return (
    <div
      id={id}
      className={`member-container flex justify-between relative h-16 p-2 cursor-pointer text-${textColor}  hover:bg-${bgColor} dark:hover:bg-${bgColor} rounded-md`}
      onClick={(e) => handleClick(e)}
    >
      {/* avatar */}
      <div className="relative h-12">
        <Link
          to="#"
          className={`flex items-center justify-center  rounded-full h-11 w-11 p-2 ml-2 bg-primary-400`}
          title={username}
        >
          {userAvatar}
        </Link>
        <div className="absolute -bottom-0.5 -right-0.5 ">
          <FontAwesomeIcon
            icon={faCircle}
            className="w-full text-[10px] text-green-400"
          />
        </div>
      </div>
      {/* member name */}
      <div className="flex justify-start items-center gap-1">
        <p className="text-sm">{username}</p>
        <p> {roleIcon}</p>
      </div>
      {/* options */}
      <div className="">{options}</div>
    </div>
  );
};

export default ServerMemberItem;
