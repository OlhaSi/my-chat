import styles from './App.module.css';
import React, {useState} from "react";
import LeftSide from "./modules/left-side/left-side";
import Chat from "./modules/chat/chat";
import ChatData from "./data/chats.json";

const App = () => {
    const [chats, setChats] = useState(ChatData.chats);
    const [activeChat, setActiveChat] = useState(ChatData.chats[0]);

    return (
        <div className={styles.App}>
            <LeftSide chats={chats}/>
            <Chat activeChat={activeChat} />
        </div>
    );
}

export default App;
