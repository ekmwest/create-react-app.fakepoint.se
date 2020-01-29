import React, { useState } from 'react';
import styles from './Notifications.module.css';

const defaultNotifications = [
    {
        id: 1,
        read: false,
        url: "/courses/6/posts/1",
        text: "Barry commented on a post"
    },
    {
        id: 2,
        read: false,
        url: "/courses/6/posts/2",
        text: "Sarah wrote a new post"
    },
    {
        id: 3,
        read: false,
        url: "/courses/1/posts/4",
        text: "Sammy commented on a post"
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
                {notifications.map(n => (
                    <a
                        key={n.id}
                        href={n.url}
                        className={styles.list_item}
                        onClick={() => setOpen(!open)}
                    >
                        {n.text}
                    </a>
                ))}
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
