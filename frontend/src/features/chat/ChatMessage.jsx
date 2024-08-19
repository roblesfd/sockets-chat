/*
funcionalidades:

-fijar mensaje
-editar
-eliminar
-reaccionar con emojis
-responder
-copiar texto
*/

import {
  faArrowRight,
  faArrowsTurnRight,
  faArrowTurnDown,
  faArrowUpShortWide,
  faEllipsis,
  faPen,
  faReply,
  faSmile,
  faThumbTack,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Dropdown from "@/components/Dropdown";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import ModalContext from "@/context/ModalContext";

/*
componentes

tipos de mensaje 

-texto
-imagen
-gif
-emoji
-enlace
-archivo
*/

// let msg = {
//   content: "",
//   avatar: "",
//   author: "",
//   createdAt: "",
//   replyOfMessage: "",
//   reactions: [],
// };

const ChatMessage = ({
  message,
  handlePinnedMessage,
  handleShowReplyMessage,
  handleShowEditMessage,
  handleShowDeleteMessage,
}) => {
  const {
    id,
    content,
    avatar,
    author,
    createdAt,
    reactions,
    isReply,
    messageToReply,
  } = message;

  const { modal, setModal } = useContext(ModalContext);

  const pinMessage = (idMessage) => {
    localStorage.setItem("pinned-message", idMessage);
    handlePinnedMessage(idMessage);
  };

  const dropdownData = {
    button: (
      <button className="w-full text-primary-500 dark:text-primary-30 hover:bg-primary-40 dark:hover:bg-primary-200 px-2 py-1 rounded-md ">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    ),
    options: [
      <>
        <button
          onClick={() => pinMessage(id)}
          className={`w-full flex items-center justify-between gap-2`}
        >
          Fijar
          <FontAwesomeIcon icon={faThumbTack} className="text-md" />
        </button>
      </>,
      <>
        <button
          className={`w-full flex items-center justify-between gap-2`}
          onClick={() => handleShowReplyMessage(id)}
        >
          Responder
          <FontAwesomeIcon icon={faReply} className="text-md" />
        </button>
      </>,
      <>
        <button
          className={`w-full flex items-center justify-between gap-2`}
          onClick={() => handleShowEditMessage(id)}
        >
          Editar
          <FontAwesomeIcon icon={faPen} className="text-md" />
        </button>
      </>,

      <>
        <button
          className={`w-full flex items-center justify-between gap-2`}
          onClick={() => {
            setModal({
              isOpen: !modal.isOpen,
              content: modalDeleteMessageContent,
            });
          }}
        >
          Eliminar
          <FontAwesomeIcon icon={faTrash} className="text-md" />
        </button>
      </>,
      <>
        <button className={`w-full flex items-center justify-between gap-2`}>
          Reacciones
          <FontAwesomeIcon icon={faSmile} className="text-md" />
        </button>
      </>,
    ],
  };

  const modalDeleteMessageContent = (
    <div className="block text-center">
      <h2 className="font-semibold">¿Deseas eliminar este mensaje?</h2>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="bg-green-400 hover:bg-green-500 text-white px-3 py-2 rounded-md"
          onClick={() => {
            handleShowDeleteMessage(id);
            setModal({
              isOpen: false,
              content: null,
            });
          }}
        >
          Aceptar
        </button>
        <button
          className="bg-red-400 hover:bg-red-500 text-white px-3 py-2 rounded-md"
          onClick={() => {
            setModal({
              isOpen: false,
              content: null,
            });
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  return (
    <div
      id={id}
      className="grid grid-cols-12 w-full min-h-20 p-4 hover:bg-primary-30 dark:hover:bg-primary-300"
    >
      {/* reply si es un mensaje de reply */}
      {isReply && (
        <div className="col-span-12 flex blockgap-3 h-9 px-12 mb-0  border-2 border-primary-100 rounded-t-md text-primary-300 dark:text-primary-50">
          <Link
            to="#"
            // title={author?.username}
            className="font-semibold  flex justify-start items-center gap-3"
          >
            {/* {author?.username} */}
            <FontAwesomeIcon icon={faReply} className=" text-lg" />
            <span className="text-[15px]">
              {messageToReply.author.username}
            </span>
            <p className="italic font-normal text-[12px]">
              {messageToReply.content}
            </p>
          </Link>
        </div>
      )}
      {/* thumbnail miembro */}
      <div
        className={`col-span-1 ${isReply && "border-l-2 border-primary-100"} `}
      >
        <Link
          to="#"
          className={`flex items-center justify-center  rounded-full h-11 w-11 p-2 mt-2 ml-2 bg-primary-400 hover:bg-primary-200`}
          title={author?.username}
        >
          {avatar ? (
            <img src={avatar} alt={author?.username} />
          ) : (
            <FontAwesomeIcon icon={faUser} className="w-full text-xl" />
          )}
        </Link>
      </div>
      <div className="col-span-11">
        <div className="flex justify-between">
          <div className=" flex justify-start items-center gap-3">
            {/* username miembro */}
            <Link
              to="#"
              title={author?.username}
              className="font-semibold text-[15px]"
            >
              {author?.username}
            </Link>
            {/* fecha de envio */}
            <p className="text-xs">{createdAt}</p>
          </div>
          {/* opciones */}
          <div>
            <Dropdown data={dropdownData} />
          </div>
        </div>
        {/* contenido de texto */}
        <div className="mt-2 text-[15px]">
          <p>{content}</p>
        </div>
        {/* reacciones */}
        <div>
          {reactions &&
            reactions.map((reaction) => {
              const id = uuidv4();
              return <div key={id}>{reaction}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
