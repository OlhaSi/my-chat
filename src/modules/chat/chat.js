import React from "react";
import styles from "./chat.module.css";
import Header from "./header/header";
import ChatContent from "./chat-content/chat-content";
import MessageBar from "./message-bar/message-bar";

const Chat = ({ activeChat, addNewMessage }) => {
  return (
    <div className={styles.container}>
      <Header person={activeChat.person} />
      <ChatContent activeChat={activeChat} addNewMessage={addNewMessage} />
      <MessageBar activeChat={activeChat} addNewMessage={addNewMessage} />
    </div>
  );
};

export default Chat;
