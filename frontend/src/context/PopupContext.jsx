import { createContext } from "react";

const PopupContext = createContext({
  popup: {
    isPopupOpen: false,
    content: "",
    eventGeneratorCoords: {},
  },
  setPopup: () => null,
});

export default PopupContext;
