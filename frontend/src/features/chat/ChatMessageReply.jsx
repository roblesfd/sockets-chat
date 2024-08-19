import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faReply,
  faThumbTackSlash,
} from "@fortawesome/free-solid-svg-icons";

const ChatMessageReply = ({ message, setIsReply }) => {
  const { author } = message;

  const handleClose = () => {
    setIsReply(false);
  };

  return (
    <div className="w-full flex justify-between items-center h-14 ">
      <div>
        <FontAwesomeIcon icon={faReply} className="text-md" />
      </div>
      <div className="text-sm">
        <p>
          Responder a <span> {author.username}</span>
        </p>
      </div>
      <button title="Cancelar" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} className="text-md" />
      </button>
    </div>
  );
};

export default ChatMessageReply;
