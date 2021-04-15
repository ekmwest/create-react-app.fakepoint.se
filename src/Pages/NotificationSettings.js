import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import styles from './NotificationSettings.module.css';
import { Link } from 'react-router-dom';
import NotificationSettingsCourse from '../Components/NotificationSettingsCourse/NotificationSettingsCourse';

const defaultGroups = [
    {
        id: 1,
        group: "Javascript 3"
    },
    {
        id: 2,
        group: "Informationsarkitektur"

    },
    {
        id: 3,
        group: "LIA - flygplats"
    },
    {
        id: 4,
        group: " Grundläggande teori och praktik"
    },
    {
        id: 5,
        group: "Teknikkurs 1"

    }
];

function NotificationSettings() {

    const [groups] = useState(defaultGroups);

    return (
        <>
            <Header title="Notification settings"></Header>
            <div className={styles.notification_settings}>
                <div className={styles.notification_settings_container}>
                    <div className={styles.notifications_page}>
                        <Link to="/startpagenotifications" className={styles.notifications_page_link}>Back</Link>
                    </div>
                    <h3>Notification settings</h3>


                    <div className={styles.notification_settings_course_list}>
                        {groups.map(n => (
                              <NotificationSettingsCourse key={n.id} id={n.id} group={n.group}/>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default NotificationSettings;
