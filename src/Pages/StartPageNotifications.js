import React from 'react';
import Header from '../Components/Header/Header';
import styles from './StartPageNotifications.module.css';
import Messages from '../Components/Messages/Messages';
import { Link } from 'react-router-dom';

function StartPageNotifications() {

    return (
        <>
            <Header title="Home B"></Header>
            <div className={styles.content}>
                <div className={styles.notification_list}>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/bell.png" className={styles.notification_bell}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Du behöver godkänna en LIA-plats
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Svara
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/bell.png" className={styles.notification_bell}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Kursutvärdering Att arbeta i näringslivet
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Svara
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/bell.png" className={styles.notification_bell}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Kursutvärdering Teknikkurs 1
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Svara
                        </div>
                    </div>
                    <h3 className={styles.notification_title}>New</h3>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user.jpg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Stig Rig and 20 others have commented on your post
                            </div>

                            <div className={styles.notification_read}>
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Javascript 3 • Today
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-1.jpeg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Maria Mania has added a new post
                            </div>                           
                            <div className={styles.notification_read}>
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur • Yesterday
                        </div>
                    </div>
                    <h3 className={styles.notification_title}>Earlier</h3>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-4.jpeg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Sara Hansson has commented on your post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Lärande i arbete • March 25
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-1.jpeg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Maria Mania has added a new post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur 3 • March 25
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-4.jpeg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Sara Hansson has commented on your post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Javascript 3 • March 24
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user.jpg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Stig Rig and 2 others have commented on your post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur 3 • Mar 23
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user.jpg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Stig Rig has added a new post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur 3 • Mar 23
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default StartPageNotifications;
