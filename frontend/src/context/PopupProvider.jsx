import { useEffect, useState } from "react";
import PopupContext from "./PopupContext";
import Popup from "../components/Popup/PopupContainer";

const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState({
    isPopupOpen: false,
    content: "",
    eventGeneratorCoords: {},
  });
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  });

  if (!renderComponent) return <></>;

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      <Popup />
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
