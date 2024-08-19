import { useContext } from "react";
import PopupContext from "@/context/PopupContext";
import PopupCard from "./PopupCard";

const Popup = () => {
  const { popup, setPopup } = useContext(PopupContext);
  const { isPopupOpen, content, eventGeneratorCoords } = popup;

  const handleModalClose = () => {
    setPopup({
      isPopupOpen: false,
      content: null,
      eventGeneratorCoords: {},
    });
  };

  const handleContainerClick = (e) => {
    if (e.currentTarget === e.target) {
      handleModalClose();
    }
  };

  return (
    <>
      {isPopupOpen && (
        <div
          id="popup"
          className={`fixed top-0 left-0 w-full h-full  transition duration-300 ease-in-out z-20`}
          onClick={handleContainerClick}
        >
          <div
            className={`absolute`}
            style={{
              top: `${eventGeneratorCoords.top}px`,
              left: `${
                eventGeneratorCoords.left - eventGeneratorCoords.width - 20
              }px`,
            }}
          >
            <PopupCard user={content} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
