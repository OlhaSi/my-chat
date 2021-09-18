import React, { useCallback, useState } from "react";
import styles from "./left-side.module.css";

import SearchBar from "./search-bar/search-bar";
import Contacts from "./contacts/contacts";

const LeftSide = ({ chats, activeChat, setActiveChat }) => {
  const [filteredList, setFilteredList] = useState(chats);
  const onFilter = useCallback(
    (query) => {
      if (query === "") {
        setFilteredList(chats);
      } else {
        const filtered = [];
        chats.forEach((chat) => {
          const {
            person: { name },
          } = chat;
          if (name.toLowerCase().includes(query.toLowerCase())) {
            filtered.push(chat);
          }
        });

        setFilteredList(filtered);
      }
    },
    [chats]
  );

  return (
    <div className={styles.containerLeftSide}>
      <SearchBar onFilter={onFilter} />
      <Contacts
        chats={filteredList}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </div>
  );
};

export default LeftSide;
