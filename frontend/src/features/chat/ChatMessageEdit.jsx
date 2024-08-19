import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEdit, faReply } from "@fortawesome/free-solid-svg-icons";

const ChatMessageEdit = ({ message, setIsEdit }) => {
  const { content } = message;

  const handleClose = () => {
    setIsEdit(false);
  };

  return (
    <div className="w-full flex justify-between items-center h-14 ">
      <div className="flex justify-start items-center gap-6">
        <div>
          <FontAwesomeIcon icon={faEdit} className="text-md" />
        </div>
        <div className="block text-sm">
          <h4 className="font-semibold">Editar mensaje</h4>
          <p>{content}</p>
        </div>
      </div>

      <button title="Cancelar" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} className="text-md" />
      </button>
    </div>
  );
};

export default ChatMessageEdit;
