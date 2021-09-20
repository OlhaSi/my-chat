import styles from "./App.module.css";
import React, { useCallback, useEffect, useState } from "react";
import LeftSide from "./modules/left-side/left-side";
import Chat from "./modules/chat/chat";
import ChatData from "./data/chats.json";

const chatsSort = (chats) => {
  return chats.sort((a, b) => {
    return (
      b.messages[b.messages.length - 1].timestamp -
      a.messages[a.messages.length - 1].timestamp
    );
  });
};

const STORAGE_ID = "local-chats";
const localChatsString = localStorage.getItem(STORAGE_ID);
const localChats = localChatsString ? JSON.parse(localChatsString) : undefined;

const App = () => {
  const [chats, setChats] = useState(localChats || ChatData.chats);
  const [activeChat, setActiveChat] = useState(chats[0]);

  const onChatsUpdate = useCallback((newChats) => {
    const sortResults = chatsSort(newChats);
    localStorage.setItem(STORAGE_ID, JSON.stringify(sortResults));
    setChats(sortResults);
    setActiveChat(sortResults[0]);

    console.log("----onChatsUpdate----", sortResults);
  }, []);

  useEffect(() => {
    onChatsUpdate(chats);
  }, [chats, onChatsUpdate]);

  const addNewMessage = useCallback(
    (msg, msgType, personID) => {
      const newChats = [];

      chats.forEach((chatData) => {
        if (chatData.person.id === personID) {
          const timestamp = +new Date();
          newChats.push({
            ...chatData,
            messages: [
              ...chatData.messages,
              {
                id: timestamp,
                message: msg,
                timestamp,
                type: msgType,
              },
            ],
          });
        } else {
          newChats.push(chatData);
        }
      });
      onChatsUpdate(newChats);
    },
    [activeChat.person.id, chats, onChatsUpdate]
  );

  return (
    <div className={styles.App}>
      <LeftSide
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <Chat activeChat={activeChat} addNewSendMessage={addNewMessage} />
    </div>
  );
};

export default App;
