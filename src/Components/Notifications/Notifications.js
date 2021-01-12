import React, { useState } from 'react';
import styles from './Notifications.module.css';
import { Link } from 'react-router-dom';

const defaultNotifications = [
    {
        id: 1,
        read: false,
        avatar: "/icons/1.jpg",
        url: "/courses/6/posts/1",
        text: "You have a survey to respond",
        group: "Javascript 3",
        date: "Today"
    },
    {
        id: 2,
        read: false,
        avatar: "/icons/user-c.jpg",
        url: "/courses/6/posts/2",
        text: "Anna has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday"
    },
    {
        id: 3,
        read: false,
        avatar: "/icons/user-b.jpg",
        url: "/courses/1/posts/4",
        text: "Sammy commented on a post",
        group: "Informationsarkitektur ",
        date: "Yesterday"
    }
];

function Notifications() {
    const [open, setOpen] = useState(false);
    const [notifications] = useState(defaultNotifications);

    const unreadCount = () => notifications.filter(x => !x.read).length;

    const counter = () => {
        if (unreadCount() < 1) return null;
        return <span className={styles.count}>{unreadCount()}</span>;
    }

    const notificationsList = () => {
        if (!open) return null;

        return (
            <div className={styles.list}>
                <div className={styles.list_header}>
                    <div className={styles.list_title}>
                        Notifications
                    </div>
                    <div className={styles.list_link}>
                        Mark all read
                    </div>
                </div>
                {notifications.map(n => (
                    <>
                        <div key={n.id} className={styles.list_item}>
                            <div className={styles.list_avatar}>
                                <img src={n.avatar} className={styles.list_avatar_image}></img>
                            </div>
                            <a
                                key={n.id}
                                href={n.url}
                                className={styles.list_content}
                                onClick={() => setOpen(!open)}
                            >
                                {n.text}
                            </a>
                        </div>
                        <div className={styles.list_item_meta}>
                            <div className={styles.list_item_group}>
                                {n.group}
                            </div>
                            <span>
                                •
                            </span>
                            <div className={styles.list_item_date}>
                                {n.date}
                            </div>
                        </div>
                    </>
                ))}
                <Link to="/startpagenotifications" className={styles.link_to_notifications} onClick={() => setOpen(!open)}> View all notifications...</Link>
            </div>
        );
    }

    return (
        <div className={styles.notifications}>
            <div className={styles.toggler} onClick={() => setOpen(!open)}>
                {counter()}
            </div>
            {notificationsList()}
        </div>
    );
}

export default Notifications;
