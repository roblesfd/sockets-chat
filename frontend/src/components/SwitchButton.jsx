import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SwitchButton = ({ activeIcon, inactiveIcon, isActive, onToggle }) => {
  const [active, setActive] = useState(isActive);
  return (
    <button
      onClick={() => {
        console.log("Click");
        setActive(!active);
        onToggle;
      }}
      className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none ${
        active ? "bg-green-400" : "bg-red-400"
      }`}
    >
      <span
        className={`absolute flex items-center justify-center h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-300 ${
          active ? "translate-x-8" : "translate-x-1"
        }`}
      >
        {<FontAwesomeIcon icon={active ? activeIcon : inactiveIcon} />}
      </span>
    </button>
  );
};

export default SwitchButton;
