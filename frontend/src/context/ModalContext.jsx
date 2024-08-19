import { createContext } from "react";

const ModalContext = createContext({
  modal: {
    isOpen: false,
    content: "",
  },
  setModal: () => null,
});

export default ModalContext;
