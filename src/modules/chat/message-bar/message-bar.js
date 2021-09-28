import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./message-bar.module.css";

import { MdSend } from "react-icons/md";
import { getRandomJoke } from "../../../services/mc-service";

const MessageBar = ({ addNewMessage, activeChat }) => {
  const input = useRef(null);
  const [jokeObj, setJokeObj] = useState({});

  useEffect(() => {
    addNewMessage(jokeObj.joke, "received", jokeObj.pId);
  }, [jokeObj]);

  const getJokes = useCallback(
    (pId) =>
      setTimeout(() => {
        getRandomJoke()
          .then((r) => r.json())
          .then((resp) => {
            setJokeObj({ pId, joke: resp.value });
          });
      }, 5000),
    []
  );

  // every time we change the active person an input field will be clear
  useEffect(() => {
    input.current.value = "";
  }, [activeChat.person.id]);

  const addMsgHandler = useCallback(() => {
    addNewMessage(input.current.value, "sent", activeChat.person.id);
    // make an input clear
    input.current.value = "";
    // waiting for a new joke
    getJokes(activeChat.person.id);
  }, [activeChat.person.id, addNewMessage, getJokes]);

  // click on icon
  const onClick = useCallback(() => {
    if (input.current.value !== "") {
      addMsgHandler();
    }
  }, [addMsgHandler]);

  // press Enter
  const onKeyDown = useCallback(
    (e) => {
      if (input.current.value !== "" && e.key === "Enter") {
        addMsgHandler();
      }
    },
    [addMsgHandler]
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
