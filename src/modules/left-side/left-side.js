import React from 'react';
import styles from "./left-side.module.css"

import SearchBar from "./search-bar/search-bar";
import Contacts from "./contacts/contacts";

const LeftSide = ({chats}) => {
    return (
        <div className={styles.containerLeftSide}>
            <SearchBar/>
            <Contacts chats={chats}/>
        </div>
    )
}

export default LeftSide;
