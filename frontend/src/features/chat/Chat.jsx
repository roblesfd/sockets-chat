import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInputArea from "./ChatInputArea";
import ChatPinnedMessage from "./ChatPinnedMessage";
import ChatMessageEdit from "./ChatMessageEdit";
import ChatMessageReply from "./ChatMessageReply";
import { v4 as uuidv4 } from "uuid";

let messages = [
  {
    id: 1,
    content:
      "Este es el cuerpo del mensaje khhk  ksdhfk sdkjhsdkjshdfkjshdfkjhsfdkjshdfkjshdfkjshdfkjsdhfkjsdhfkjshdfkjshdfkjshdf dsfhjksdfhjksd fksjdfh ksjdfskdjf hskjdfh skdjf sdkjfhsd kfjhs fksdfhskjd fskdjfh sdfk sdkfjh skdfhsdfk",
    avatar: "",
    author: {
      username: "Nombre del autor",
    },
    createdAt: "27/03/2024 a las 17:58",
    replyOfMessage: "",
    reactions: [],
  },
  {
    id: 2,
    content: "Este es el cuerpo deasdfas sdfl mensaje",
    avatar: "",
    author: {
      username: "Nombre del autor",
    },
    createdAt: "27/03/2024 a las 17:58",
    replyOfMessage: "",
    reactions: [],
  },
  {
    id: 3,
    content: "Este es el cuerpo del mensafh hdfgh fgddfje",
    avatar: "",
    author: {
      username: "Nombre del autor",
    },
    createdAt: "27/03/2024 a las 17:58",
    replyOfMessage: "",
    reactions: [],
    isReply: true,
    messageToReply: {
      id: 2,
      content: "Este es el cuerpo deasdfas sdfl mensaje",
      avatar: "",
      author: {
        username: "Nombre del autor",
      },
      createdAt: "27/03/2024 a las 17:58",
      replyOfMessage: "",
      reactions: [],
      isReply: true,
      messageToReply: {},
    },
  },
  {
    id: 4,
    content: "Este es el asdfsd ghghhcuerpo del mensds sdaje",
    avatar: "",
    author: {
      username: "Nombre del autor",
    },
    createdAt: "27/03/2024 a las 17:58",
    replyOfMessage: "",
    reactions: [],
  },
  {
    id: 5,
    content: "Este es sdffsd sdfdsf sfsda e",
    avatar: "",
    author: {
      username: "Nombre del autor",
    },
    createdAt: "27/03/2024 a las 17:58",
    replyOfMessage: "",
    reactions: [],
  },
];
let count = messages.length;

const Chat = () => {
  const lsPinnedMessage =
    typeof localStorage.getItem("pinned-message") !== "undefined"
      ? JSON.parse(localStorage.getItem("pinned-message"))
      : null;
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajeList, setMensajeList] = useState(messages);
  const [pinnedMessage, setPinnedMessage] = useState(
    messages.find((message) => message.id === lsPinnedMessage)
  );
  const [isReply, setIsReply] = useState(false);
  const [messageToReply, setMessageToReply] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [messageToEdit, setMessageToEdit] = useState(null);

  const dummy = useRef(null);

  const handleNewMessage = (nuevoMensaje) => {
    const messageObject = {
      id: ++count,
      content: nuevoMensaje,
      avatar: "",
      author: {
        username: "Juanson",
      },
      createdAt: "12/07/2024 a las 18:01",
      replyOfMessage: "",
      reactions: [],
      isReply,
      messageToReply,
    };
    setMensajeList([...mensajeList, messageObject]);
    setMessageToReply(null);
    setIsReply(false);
  };

  const handlePinnedMessage = (idMessage) => {
    setPinnedMessage(mensajeList.find((message) => message.id === idMessage));
  };

  const handleShowReplyMessage = (idMessage) => {
    setIsReply(true);
    setMessageToReply(mensajeList.find((message) => message.id === idMessage));
  };

  const handleShowEditMessage = (idMessage) => {
    setIsEdit(true);
    setMessageToEdit(mensajeList.find((message) => message.id === idMessage));
  };

  const handleShowDeleteMessage = (idMessage) => {
    setMensajeList(mensajeList.filter((message) => message.id !== idMessage));
  };

  useEffect(() => {
    if (pinnedMessage) {
      console.log("Nigger");
    }
  }, [pinnedMessage]);

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [mensajeList]);

  return (
    <div>
      <section
        id="messagesArea"
        className="h-auto md:h-screen flex flex-col relative"
      >
        {/* area de mensaje fijado */}
        <div className="absolute top-0 w-full px-3 z-10 text-primary-600 bg-white dark:bg-primary-500 dark:text-primary-30 rounded-b-lg shadow-md">
          {pinnedMessage && <ChatPinnedMessage message={pinnedMessage} />}
        </div>

        {/* area de mensajes */}
        <div id="chat-messages-area" className="flex-3 overflow-y-scroll h-5/6">
          {mensajeList.map((message) => {
            const id = uuidv4();
            return (
              <ChatMessage
                key={id}
                message={message}
                handlePinnedMessage={handlePinnedMessage}
                handleShowReplyMessage={handleShowReplyMessage}
                handleShowEditMessage={handleShowEditMessage}
                handleShowDeleteMessage={handleShowDeleteMessage}
              />
            );
          })}
          <div ref={dummy} />
        </div>
        {/* area de input mensajes */}
        <div
          id="chat-input-area"
          className="content-center relative  dark:bg-primary-500 mt-6  w-full h-1/6"
        >
          {/* area para respuesta a mensaje */}
          <div className="absolute  -top-5 w-full px-3 z-10 text-primary-30 bg-primary-300 dark:bg-primary-200">
            {isReply && (
              <ChatMessageReply
                message={messageToReply}
                setIsReply={setIsReply}
              />
            )}
            {isEdit && (
              <ChatMessageEdit message={messageToEdit} setIsEdit={setIsEdit} />
            )}
          </div>
          <ChatInputArea
            setNuevoMensaje={setNuevoMensaje}
            handleNewMessage={handleNewMessage}
            inputTextDefault={isEdit ? messageToEdit.content : ""}
          />
        </div>
      </section>
    </div>
  );
};

export default Chat;
