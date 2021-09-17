import React from 'react';
import styles from "./contacts.module.css"
import Avatar from "../../../components/avatar/avatar";


const formatTime = (msec) => {
    const date = new Date(msec);
    return date.toDateString();
}

const Contacts = ({chats}) => {
    return (
        <div className={styles.contactsContainer}>
            <p>Chats</p>
            {chats.map(({person, messages}) => {
                    return <div className={styles.messageContainer}>
                        <div className={styles.contentWrapper}>

                            <Avatar src={person.icon}/>
                            <div className={styles.content}>
                                <div>{person.name}</div>
                                {messages.length > 0 &&
                                <div className={styles.message}>
                                    {messages[messages.length - 1].message}
                                </div>}
                            </div>
                        </div>

                        {messages.length > 0 && <div className={styles.date}>{formatTime(messages[messages.length - 1].timestamp)}</div>}
                    </div>
                }
            )}
        </div>

    )
}

export default Contacts;
