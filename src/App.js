import React, { useCallback, useState } from "react";
import LeftSide from "./modules/left-side/left-side";
import Chat from "./modules/chat/chat";
import ChatData from "./data/chats.json";

import styles from "./App.module.css";

// sort chats by last message on the left side
const chatsSort = (chats) => {
  return chats.sort((a, b) => {
    return (
      b.messages[b.messages.length - 1].timestamp -
      a.messages[a.messages.length - 1].timestamp
    );
  });
};

// save data to local storage
const STORAGE_ID = "local-chats";
const localChatsString = localStorage.getItem(STORAGE_ID);
const localChats = localChatsString ? JSON.parse(localChatsString) : undefined;

const App = () => {
  // initially first time data comes from chats.json
  // and after every next page reload from local storage
  const [chatsArray, setChatsArray] = useState(localChats || ChatData.chats);
  // every time we reload the page the very first chat will be active
  const [activeChat, setActiveChat] = useState(chatsArray[0]);

  // function for updating state with new message
  const onChatsUpdate = useCallback(
    (updatedChats) => {
      const sortResults = chatsSort(updatedChats);
      // updating local storage with new sorting result
      localStorage.setItem(STORAGE_ID, JSON.stringify(sortResults));
      // updating state with new sorted chats
      setChatsArray(sortResults);

      // find active chat on the right side
      const nextActiveChat = updatedChats.find(
        (chat) => chat.person.id === activeChat.person.id
      );
      // update chat messages for currently active chat (show last added message)
      setActiveChat(nextActiveChat);
    },
    [activeChat.person.id]
  );

  // both for received and sent messages
  const addNewMessage = useCallback(
    (msg, msgType, personID) => {
      const updatedChats = [];

      // iterate over all chats
      chatsArray.forEach((chatData) => {
        // find the person who get or send a new message
        if (chatData.person.id === personID) {
          const timestamp = +new Date();

          const newMessage = {
            id: timestamp,
            message: msg,
            timestamp,
            type: msgType,
          };
          // add new message to messages array of chatsArray
          chatData.messages.push(newMessage);
        }
        // add new data to updatedChats
        updatedChats.push(chatData);
      });
      onChatsUpdate(updatedChats);
    },
    [chatsArray, onChatsUpdate]
  );

  return (
    <div className={styles.App}>
      <LeftSide
        chatsArray={chatsArray}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <Chat activeChat={activeChat} addNewMessage={addNewMessage} />
    </div>
  );
};

export default App;
