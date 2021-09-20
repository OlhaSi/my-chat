import React, { useCallback, useRef } from "react";
import styles from "./message-bar.module.css";

import { MdSend } from "react-icons/md";

const MessageBar = ({ addNewSendMessage }) => {
  const input = useRef(null);

  const onClick = useCallback(() => {
    if (input.current.value !== "") {
      addNewSendMessage(input.current.value, "sent");
      input.current.value = "";
    }
  }, [addNewSendMessage, input]);

  const onKeyDown = useCallback(
    (e) => {
      if (input.current.value !== "" && e.key === "Enter") {
        addNewSendMessage(input.current.value);
        input.current.value = "";
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
