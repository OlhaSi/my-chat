import React from "react";
import styles from "./chat-content.module.css";
import Avatar from "../../../components/avatar/avatar";

const formatTime = (msec) => {
  const date = new Date(msec);
  return date.toLocaleString();
};

const ChatContent = ({ activeChat: { messages, person } }) => {
  return (
    <div className={styles.chatContainer}>
      {messages?.map((msgObj) => {
        if (!msgObj) {
          return null;
        }
        if (msgObj.type === "received") {
          return (
            <div key={msgObj.id} className={styles.receivedWrapper}>
              <div className={styles.messageDetails}>
                <Avatar src={person?.icon} />
                <div className={styles.textReceived}>{msgObj.message}</div>
              </div>
              <div className={styles.timeReceived}>
                {formatTime(msgObj.timestamp)}
              </div>
            </div>
          );
        }

        return (
          <div key={msgObj.id} className={styles.sentWrapper}>
            <div className={styles.textSent}>{msgObj.message}</div>
            <div className={styles.timeSent}>
              {formatTime(msgObj.timestamp)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatContent;
