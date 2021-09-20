import React, { useCallback, useRef } from "react";
import styles from "./message-bar.module.css";

import { MdSend } from "react-icons/md";
import { getRandomJoke } from "../../../services/mc-service";

const MessageBar = ({ addNewSendMessage, activeChat }) => {
  const input = useRef(null);
  let getJokes = (pId) =>
    setTimeout(() => {
      getRandomJoke()
        .then((r) => r.json())
        .then((resp) => {
          console.log("----getRandomJoke----", pId);
          addNewSendMessage(resp.value, "received", pId);
        });
    }, 2000);

  const addMsgHandler = useCallback(() => {
    console.log("----sent----", activeChat.person.id);
    addNewSendMessage(input.current.value, "sent", activeChat.person.id);
    input.current.value = "";
    getJokes(activeChat.person.id);
  }, [activeChat, input]);

  const onClick = useCallback(() => {
    if (input.current.value !== "") {
      addMsgHandler();
      // addNewSendMessage(input.current.value, "sent", activeChat.person.id);
      // input.current.value = "";
    }
  }, [addNewSendMessage, input]);

  const onKeyDown = useCallback(
    (e) => {
      if (input.current.value !== "" && e.key === "Enter") {
        addMsgHandler();
        // addNewSendMessage(input.current.value, "sent", activeChat.person.id);
        // input.current.value = "";
      }
    },
    [addNewSendMessage, input]
  );

  return (
    <div className={styles.messageContainer}>
      <div className={styles.sendInput}>
        <MdSend size="20px" color="slategrey" onClick={onClick} />

        <input
          ref={input}
          onKeyDown={onKeyDown}
          className={styles.sendInputText}
          placeholder="Type your message"
          type="text"
        />
      </div>
    </div>
  );
};

export default MessageBar;
