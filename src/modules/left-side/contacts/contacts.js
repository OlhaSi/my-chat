import React, { useCallback } from "react";
import styles from "./contacts.module.css";
import Avatar from "../../../components/avatar/avatar";

const formatTime = (msec) => {
  const date = new Date(msec);
  return date.toDateString();
};

const Contacts = ({ chats, activeChat, setActiveChat }) => {
  const handleClick = useCallback(
    (chat) => {
      setActiveChat(chat);
    },
    [setActiveChat]
  );

  return (
    <div className={styles.contactsContainer}>
      <p>Chats</p>
      {chats.map((chat) => {
        const { person, messages } = chat;

        let className = styles.messageContainer;
        if (person.id === activeChat.person.id) {
          className += " " + styles.messageContainerActive;
        }

        return (
          <div
            key={person.id}
            className={className}
            onClick={handleClick.bind({}, chat)}
          >
            <div className={styles.contentWrapper}>
              <Avatar src={person.icon} />
              <div className={styles.content}>
                <div>{person.name}</div>
                {messages.length > 0 && (
                  <div className={styles.message}>
                    {messages[messages.length - 1].message}
                  </div>
                )}
              </div>
            </div>

            {messages.length > 0 && (
              <div className={styles.date}>
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
