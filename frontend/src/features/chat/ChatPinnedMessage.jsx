import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTackSlash } from "@fortawesome/free-solid-svg-icons";

const handleDesfijarMensaje = () => {
  console.log("desfijado");
};

const ChatPinnedMessage = ({ message }) => {
  const { content } = message;
  return (
    <div className="w-full  h-14">
      <span className="text-xs">Mensaje fijado</span>
      <div className="h-auto flex justify-between items-center">
        <div>
          <Link to="#" className="text-[15px]">
            {content}
          </Link>
        </div>
        <button
          className=""
          title="Desfijar mensaje"
          onClick={handleDesfijarMensaje}
        >
          <FontAwesomeIcon icon={faThumbTackSlash} className="text-md" />
        </button>
      </div>
    </div>
  );
};

export default ChatPinnedMessage;
