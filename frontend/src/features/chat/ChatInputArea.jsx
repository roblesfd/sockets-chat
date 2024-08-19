import {
  faFaceSmile,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";

const ChatInputArea = ({
  setNuevoMensaje,
  handleNewMessage,
  inputTextDefault,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputMessage, setInputMessage] = useState(
    inputTextDefault ? inputTextDefault : ""
  );
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const onInputChange = (value) => {
    setInputMessage(value);
    if (inputMessage) {
      setIsDisabledButton(true);
    } else {
      setIsDisabledButton(false);
    }
  };

  return (
    <div className="flex p-4 border border-gray-300 ">
      {/* area de input */}
      <input
        type="text"
        className="w-4/5  px-4 py-2 focus:outline-none  text-primary-600 placeholder:text-primary-500 dark:placeholder:text-primary-30 dark:text-primary-30 bg-primary-30 dark:bg-primary-400 rounded-md"
        placeholder="Escribe un mensaje..."
        value={inputMessage}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
      {/* area de botones */}
      <div className="w-1/5 px-1  text-lg flex gap-2">
        <button
          title="Enviar mensaje"
          className={`${
            inputMessage
              ? "hover:bg-primary-30 text-primary-600 cursor-pointer"
              : "text-primary-100"
          }   dark:text-primary-30 dark:hover:bg-primary-200 rounded-full  h-10 w-10`}
          onClick={() => {
            setNuevoMensaje(inputMessage);
            handleNewMessage(inputMessage);
            setInputMessage("");
          }}
          // disabled={() => isDisabledButton}
        >
          {<FontAwesomeIcon icon={faPaperPlane} />}
        </button>
        <button
          title="Subir archivo"
          className="hover:bg-primary-30 text-primary-600 dark:text-primary-30 dark:hover:bg-primary-200 rounded-full  h-10 w-10  "
        >
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
        <div className="relative">
          <button
            title="Enviar emoji"
            className="hover:bg-primary-30 text-primary-600 dark:text-primary-30 dark:hover:bg-primary-200 rounded-full  h-10 w-10  "
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FontAwesomeIcon icon={faFaceSmile} />
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-8 right-6">
              <EmojiPicker
                searchPlaceholder="Buscar emojis..."
                defaultSkinTone="neutral"
                onEmojiClick={(emoji) => {
                  onInputChange((inputMessage) => inputMessage + emoji.emoji);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInputArea;
