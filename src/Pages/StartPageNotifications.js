import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import styles from './StartPageNotifications.module.css';
import { Link } from 'react-router-dom';
import NotificationActions from '../Components/NotificationActions/NotificationActions';


const defaultNotifications = [
    {
        id: 1,
        avatar: "/icons/survey.png",
        url: "/courses/6/posts/1",
        text: "You have a survey to respond",
        group: "Javascript 3",
        date: "Today",
        type: "Surveys"
    },
    {
        id: 2,
        avatar: "/icons/user-c.jpg",
        url: "/courses/6/posts/2",
        text: "Anna has added a new post",
        group: "Javascript 3",
        date: "Today",
        type: "Newsfeed"
    },
    {
        id: 3,
        avatar: "/icons/user-b.jpg",
        url: "/courses/1/posts/4",
        text: "Sammy has added a new post",
        group: "Informationsarkitektur",
        date: "Today",
        type: "Newsfeed"
    } 
];


const groupedNotifications = [
    {
        id: 1,
        avatar: "/icons/1.jpg",
        url: "/courses/6/posts/1",
        text: "Richard has submitted an assignment",
        group: "Javascript 3",
        date: "Today",
        type: "Submissions"
    },
    {
        id: 2,
        avatar: "/icons/user-c.jpg",
        url: "/courses/6/posts/2",
        text: "Anna has submitted an assignment",
        group: "Javascript 3",
        date: "Today",
        type: "Submissions"
    },
    {
        id: 3,
        avatar: "/icons/user-b.jpg",
        url: "/courses/1/posts/4",
        text: "Sammy has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday",
        type: "Submissions"
    },
    {
        id: 4,
        avatar: "/icons/9.jpg",
        url: "/courses/6/posts/1",
        text: "Danny has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday",
        type: "Submissions"
    },
    {
        id: 5,
        avatar: "/icons/2.jpg",
        url: "/courses/6/posts/2",
        text: "Rachel has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday",
        type: "Submissions"
    },
    {
        id: 6,
        avatar: "/icons/user-a.jpg",
        url: "/courses/1/posts/4",
        text: "Sam has submitted an assignment",
        group: "Javascript 3",
        date: "Yesterday",
        type: "Submissions"
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
                        <h4 className={styles.notification_title}>New for you</h4>
                        <h4 className={styles.notification_mark_read_link}>Mark all as seen</h4>
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

                                >
                                    {n.text}
                                </a>
                                <NotificationActions group={n.group} type={n.type}/>
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
                <div className={open ? styles.notification_group_expanded : styles.notification_group}>
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
                    <div className={open ? styles.notification_group_items_expanded : styles.notification_group_items_collapsed}>
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
                                        <NotificationActions group={n.group} type={n.type}/>
                                    </div>
                                    <div className={styles.notification_meta}>
                                        {n.group} • {n.date}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </>
        );
    }


    const oldNotificationsList = () => {

        return (
            <>
                <div className={styles.notification_list}>
                    <div className={styles.notification_listheader}>
                        <h4 className={styles.notification_title}>Previously seen</h4>
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
                                <NotificationActions group={n.group} type={n.type}/>
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
            <div className={styles.notifications_container}>
                <div className={styles.notification_settings}>
                    <Link to="/notificationsettings" className={styles.notification_settings_link}> Notification settings</Link>
                </div>
                {newNotificationsList()}
                {groupedNotification()}               
                <div className={styles.divider}> </div>
                {oldNotificationsList()}
            </div>
        </div>
    );
}

export default StartPageNotifications;
