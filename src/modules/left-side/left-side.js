import React, { useCallback, useEffect, useState } from "react";
import styles from "./left-side.module.css";

import SearchBar from "./search-bar/search-bar";
import Contacts from "./contacts/contacts";

const LeftSide = ({ chatsArray, activeChat, setActiveChat }) => {
  // initially show full list of chats on left side
  const [filteredList, setFilteredList] = useState(chatsArray);

  useEffect(() => {
    setFilteredList(chatsArray);
  }, [chatsArray]);

  const onFilter = useCallback(
    (searchInputValue) => {
      if (searchInputValue === "") {
        setFilteredList(chatsArray);
      } else {
        const filtered = [];
        // chat is an object with two properties: person and messages
        chatsArray.forEach((chat) => {
          // get persons by name
          const name = chat.person.name;
          if (name.toLowerCase().includes(searchInputValue.toLowerCase())) {
            filtered.push(chat);
          }
        });

        setFilteredList(filtered);
      }
    },
    [chatsArray]
  );

  return (
    <div className={styles.containerLeftSide}>
      <SearchBar onFilter={onFilter} />
      <Contacts
        chatsArray={filteredList}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </div>
  );
};

export default LeftSide;
