import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import styles from './StartPageNotifications.module.css';


const defaultNotifications = [
    {
        id: 1,
        avatar: "/icons/survey.png",
        url: "/courses/6/posts/1",
        text: "You have a survey to respond",
        group: "Javascript 3",
        date: "Today"
    },
    {
        id: 2,
        avatar: "/icons/user-c.jpg",
        url: "/courses/6/posts/2",
        text: "Anna has added a new post",
        group: "Javascript 3",
        date: "Today"
    },
    {
        id: 3,
        avatar: "/icons/user-b.jpg",
        url: "/courses/1/posts/4",
        text: "Sammy has added a new post",
        group: "Informationsarkitektur",
        date: "Today"
    }
];


const groupedNotifications = [
    {
        id: 1,
        avatar: "/icons/1.jpg",
        url: "/courses/6/posts/1",
        text: "Richard has submitted an assignment",
        group: "Javascript 3",
        date: "Today"
    },
    {
        id: 2,
        avatar: "/icons/user-c.jpg",
        url: "/courses/6/posts/2",
        text: "Anna has submitted an assignment",
        group: "Javascript 3",
        date: "Today"
    },
    {
        id: 3,
        avatar: "/icons/user-b.jpg",
        url: "/courses/1/posts/4",
        text: "Sammy has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday"
    },
    {
        id: 4,
        avatar: "/icons/9.jpg",
        url: "/courses/6/posts/1",
        text: "Danny has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday"
    },
    {
        id: 5,
        avatar: "/icons/2.jpg",
        url: "/courses/6/posts/2",
        text: "Rachel has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday"
    },
    {
        id: 6,
        avatar: "/icons/user-a.jpg",
        url: "/courses/1/posts/4",
        text: "Sam has submitted assignment",
        group: "Javascript 3",
        date: "Yesterday"
    }
];

function StartPageNotifications() {
    const [open, setOpen] = useState(false);
    const [notifications] = useState(defaultNotifications);
    const [groupNotifications] = useState(groupedNotifications);

    const newNotificationsList = () => {

        return (
            <>
                <Header title="Notifications"></Header>
                <div className={styles.notification_list}>
                    <div className={styles.notification_listheader}>
                        <h4 className={styles.notification_title}>New</h4>
                        <h4 className={styles.notification_link}>Mark all read</h4>
                    </div>
                </div>
                {notifications.map(n => (
                    <>
                        <div key={n.id} className={styles.notification}>
                            <div className={styles.notification_header}>
                                <div className={styles.notification_avatar}>
                                    <img src={n.avatar} className={styles.notification_avatar_image}></img>
                                </div>
                                <a
                                    key={n.id}
                                    href={n.url}
                                    className={styles.notification_content_new}
                                    onClick={() => setOpen(!open)}
                                >
                                    {n.text}
                                </a>
                                <div className={styles.notification_actions}>
                                </div>
                            </div>
                            <div className={styles.notification_meta}>
                                {n.group} • {n.date}
                            </div>
                        </div>
                    </>
                ))}
            </>
        );
    }


    const groupedNotification = () => {

        return (
            <>
                <div className={styles.notification} onClick={() => setOpen(!open)}>
                    <div className={styles.notification_header}>
                        <div className={styles.notification_icon}>
                            <img src="/icons/documents.png" className={styles.notification_avatar} alt="user"></img>
                        </div>
                        <div className={styles.notification_content_new}>
                            6 new submissions in Landing page assignment
                        </div>
                        <div className={open ? styles.notification_collapse : styles.notification_expand}>
                        </div>
                    </div>
                    <div className={styles.notification_meta}>
                        Javascript 3 • Today
                    </div>
                </div>
                <div className= {open ? styles.notification_group_expanded : styles.notification_group_collapsed}>
                    {groupNotifications.map(n => (
                        <>
                            <div key={n.id} className={styles.notification}>
                                <div className={styles.notification_header}>
                                    <div className={styles.notification_avatar}>
                                        <img src={n.avatar} className={styles.notification_avatar_image}></img>
                                    </div>
                                    <a
                                        key={n.id}
                                        href={n.url}
                                        className={styles.notification_content_new}
                                    >
                                        {n.text}
                                    </a>
                                    <div className={styles.notification_actions}>
                                    </div>
                                </div>
                                <div className={styles.notification_meta}>
                                    {n.group} • {n.date}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </>
        );
    }


    const oldNotificationsList = () => {

        return (
            <>

                <div className={styles.notification_list}>
                    <div className={styles.notification_listheader}>
                        <h4 className={styles.notification_title}>Earlier</h4>
                    </div>
                </div>
                {notifications.map(n => (
                    <>
                        <div key={n.id} className={styles.notification}>
                            <div className={styles.notification_header}>
                                <div className={styles.notification_avatar}>
                                    <img src={n.avatar} className={styles.notification_avatar_image}></img>
                                </div>
                                <a
                                    key={n.id}
                                    href={n.url}
                                    className={styles.notification_content}
                                    
                                >
                                    {n.text}
                                </a>
                                <div className={styles.notification_actions}>
                                </div>
                            </div>
                            <div className={styles.notification_meta}>
                                {n.group} • {n.date}
                            </div>
                        </div>
                    </>
                ))}
            </>
        );
    }


    return (
        <div className={styles.notifications}>
            <div className={styles.content}>
                {newNotificationsList()}
                {groupedNotification()}
                {oldNotificationsList()}
            </div>
        </div>
    );
}

export default StartPageNotifications;
