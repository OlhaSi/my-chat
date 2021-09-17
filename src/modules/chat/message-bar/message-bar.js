import React from 'react';
import styles from "./message-bar.module.css";

import {MdSend} from "react-icons/md";

const MessageBar = () => {
    return (
        <div className={styles.messageContainer}>

            <div className={styles.sendInput}>
                <MdSend size="20px" color="slategrey"/>

                <input className={styles.sendInputText} placeholder="Type your message" type="text"/>
            </div>

        </div>
    )
}

export default MessageBar;
