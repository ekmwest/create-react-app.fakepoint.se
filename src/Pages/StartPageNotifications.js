import React from 'react';
import Header from '../Components/Header/Header';
import styles from './StartPageNotifications.module.css';

function StartPageNotifications() {

    return (
        <>
            <Header title="Home B"></Header>
            <div className={styles.content}>
                <div className={styles.notification_list}>
                    <div className={styles.notification_listheader}>
                        <h4 className={styles.notification_title}>New</h4>
                        <h4 className={styles.notification_link}>Mark all read</h4>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/bell-blue.svg" className={styles.reminder} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                You have a survey to respond
                            </div>

                            <div className={styles.notification_read}>
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Teknikkurs 1 • Today
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-c.jpg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                Anna and 20 others have submitted an assignment
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
                                <img src="/icons/user-7.jpeg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                John has added a new post
                            </div>
                            <div className={styles.notification_read}>
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur • Yesterday
                        </div>
                    </div>
                    <h4 className={styles.notification_title}>Earlier</h4>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-4.jpeg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                Sara has commented on your post
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Lärande i arbete • March 25
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-7.jpeg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                John has added a new announcement
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur 3 • March 25
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/user-4.jpeg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                Sara has commented on her LIA
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Javascript 3 • March 24
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/1.jpg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                Stig and 2 others have registered their LIA
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Lärande i arbete • Mar 23
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/2.jpg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                Maria has added a new cooment
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur 3 • Mar 23
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/1.jpg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                Stig has added a new comment
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Lärande i arbete • Mar 23
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notification_header}>
                            <div className={styles.notification_icon}>
                                <img src="/icons/2.jpg" className={styles.notification_avatar} alt="user"></img>
                            </div>
                            <div className={styles.notification_content}>
                                Maria has added a new announcement
                            </div>
                        </div>
                        <div className={styles.notification_action}>
                            Informationsarkitektur 3 • Mar 23
                        </div>
                    </div>
                    <div className={styles.load_notifications}>
                        View all previous notifications...
                    </div>
                </div>
            </div>
        </>


    );
}

export default StartPageNotifications;
