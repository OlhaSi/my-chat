import React from "react";
import styles from "./chat.module.css";
import Header from "./header/header";
import ChatContent from "./chat-content/chat-content";
import MessageBar from "./message-bar/message-bar";

const Chat = ({ activeChat, addNewSendMessage, addNewReceivedMessage }) => {
  return (
    <div className={styles.container}>
      <Header person={activeChat.person} />
      <ChatContent
        activeChat={activeChat}
        addNewReceivedMessage={addNewReceivedMessage}
      />
      <MessageBar
        activeChat={activeChat}
        addNewSendMessage={addNewSendMessage}
      />
    </div>
  );
};

export default Chat;
