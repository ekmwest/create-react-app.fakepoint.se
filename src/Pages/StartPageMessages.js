import React from 'react';
import Header from '../Components/Header/Header';
import styles from './StartPageMessages.module.css';
import Messages from '../Components/Messages/Messages';

function StartPageMessages() {

    return (
        <>
            <Header title="Start Page"></Header>
            <div className={styles.content}>
                <div className={styles.notification_list}>
                    <div className={styles.notification}>
                        <img src="/icons/bell.png" className={styles.notification_icon}></img>
                        <div className={styles.notification_content}>
                            Att göra
                        </div>
                        <div></div>
                        <div className={styles.notification_number}>
                            3
                        </div>
                    </div>
                </div>
                <div className={styles.messages}>
                    <Messages></Messages>
                </div>
            </div>
        </>
    );
}

export default StartPageMessages;
