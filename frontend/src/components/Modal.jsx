import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import ModalContext from "../context/ModalContext";

const Modal = () => {
  const { modal, setModal } = useContext(ModalContext);
  const { isOpen, content } = modal;

  const handleModalClose = () => {
    setModal({
      isOpen: false,
      content: null,
    });
  };

  const handleContainerClick = (e) => {
    // Verifica si el click no se hizo desde el ModalContent
    if (e.currentTarget === e.target) {
      handleModalClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="modal"
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-primary-900  bg-opacity-80 transition duration-300 ease-in-out z-20"
          onClick={handleContainerClick}
        >
          <div className=" bg-white w-96 min-h-48 p-8 relative rounded  text-primary-500  text-center">
            {/* <h2 className="text-xl font-bold mb-4">Titulo del Modal</h2> */}
            {content}
            <button
              className="absolute top-0 right-1 bg-transparent  p-2 mt-1 rounded"
              onClick={handleModalClose}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
