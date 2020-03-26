import React from 'react';
import Header from '../Components/Header/Header';
import styles from './StartPageNotifications.module.css';
import Messages from '../Components/Messages/Messages';

function StartPageNotifications() {

    return (
        <>
            <Header title="Start Page"></Header>
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
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/bell.png" className={styles.notification_bell}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Kursutvärdering Kalkylering
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
                                Kursutvärdering Grundläggande teori och praktik
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
                                Kursutvärdering Presentationsteknik
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Svara
                        </div>
                    </div>

                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user.jpg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Stig Rig has added a new comment
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Projektmetodik, kommunikation och kundbemötande • 12:00
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
                            Informationsarkitektur • 9:00
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-4.jpeg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Sara Tara has commented on your post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Lärande i arbete • Mar 25
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-2.jpeg" className={styles.notification_avatar}></img>
                            </div>
                            <div className={styles.notification_content}>
                                Justin Mustin has commented on your post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Javascript 3 • Mar 25
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StartPageNotifications;
