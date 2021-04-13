import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import styles from './NotificationSettings.module.css';
import { Link } from 'react-router-dom';


function NotificationSettings() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header title="Notification settings"></Header>
            <div className={styles.notification_settings}>
                <div className={styles.notification_settings_container}>
                    <div className={styles.notifications_page}>
                        <Link to="/startpagenotifications" className={styles.notifications_page_link}>Back</Link>
                    </div>
                    <h3>
                        Notification settings
                    </h3>
                    <div className={styles.notification_settings_course_list}>
                        <div className={styles.notification_settings_course}>
                            <input type="checkbox"  className={styles.notification_setting_checkbox} /> JavaScript 3
                        </div>
                        <div className={styles.notification_settings_course}>
                            <input type="checkbox" className={styles.notification_setting_checkbox}  onChange={() => setOpen(!open)} /> Informationsarkitektur
                        </div>
                        <div className={open ? styles.notification_settings_type_list_open  : styles.notification_settings_type_list }>
                            <div className={styles.notification_settings_type}>
                                <input type="checkbox"  className={styles.notification_setting_checkbox} /> Comments on result items
                            </div>
                            <div className={styles.notification_settings_type}>
                                <input type="checkbox"  className={styles.notification_setting_checkbox} /> Newsfeed
                            </div>
                            <div className={styles.notification_settings_type}>
                                <input type="checkbox" checked="checked" className={styles.notification_setting_checkbox} /> Logbook
                            </div>
                            <div className={styles.notification_settings_type}>
                                <input type="checkbox"  className={styles.notification_setting_checkbox} /> Survey to answer
                            </div>
                            <div className={styles.notification_settings_type}>
                                <input type="checkbox" checked="checked" className={styles.notification_setting_checkbox} /> LIA approval
                            </div>
                            <div className={styles.notification_settings_type}>
                                <input type="checkbox" className={styles.notification_setting_checkbox} /> Submissions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotificationSettings;
