import React, { useCallback } from "react";
import styles from "./contacts.module.css";
import Avatar from "../../../components/avatar/avatar";

const formatTime = (msec) => {
  const date = new Date(msec);
  return date.toDateString();
};

const Contacts = ({ chatsArray, activeChat, setActiveChat }) => {
  const handleClick = useCallback(
    (chat) => {
      setActiveChat(chat);
    },
    [setActiveChat]
  );

  return (
    <div className={styles.contactsContainer}>
      <p>Chats</p>
      {/* renders all dialogs */}
      {chatsArray.map((chat) => {
        const { person, messages } = chat;

        // selected chat row
        let className = styles.messageContainer;
        if (person.id === activeChat.person.id) {
          className += " " + styles.messageContainerActive;
        }

        // renders one dialog line on the left side
        return (
          <div
            key={person.id}
            className={className}
            onClick={() => handleClick(chat)}
          >
            <div className={styles.contentWrapper}>
              <Avatar src={person.icon} />
              <div className={styles.content}>
                <div>{person.name}</div>
                {/* check if we have messages */}
                {messages.length > 0 && (
                  <div className={styles.message}>
                    {/* then show the last message */}
                    {messages[messages.length - 1].message}
                  </div>
                )}
              </div>
            </div>

            {messages.length > 0 && (
              <div className={styles.date}>
                {/* get formatted time of last message */}
                {formatTime(messages[messages.length - 1].timestamp)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
