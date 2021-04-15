import React, { useState } from 'react';
import styles from './NotificationSettingsCourse.module.css';

const defaultTypes = [
    {
        id: 1,
        type: "Comments on results items"
    },
    {
        id: 2,
        type: "Newsfeed"

    },
    {
        id: 3,
        type: "Logbook"
    },
    {
        id: 4,
        type: "Submissions"
    },
    {
        id: 5,
        type: "Surveys"

    },
    {
        id: 6,
        type: "LIA approval"

    }

];

function NotificationSettingsCourse({ id, group }) {

    const [checked, setChecked] = useState(true);
    const [open, setOpen] = useState(false);
    
    const [types] = useState(defaultTypes);

    return (
        <>
            <div className={styles.notification_settings_course} key={id}>
                <div className={styles.notification_settings_course_header}>
                    <div className={styles.notification_settings_course_name}>{group}</div>
                    <div>
                        <input type="checkbox" id={id} className={styles.checkbox} onChange={() => setOpen(!open)} />
                        <label htmlFor={id} className={styles.switch} ></label>
                    </div>
                </div>
                <div className={open ? styles.notification_settings_course_type_list_open : styles.notification_settings_course_type_list}>
                    {types.map(n => (
                            <div className={styles.notification_settings_type} key={n.id}>

                                <div className={styles.notification_settings_course_header}>
                                    <div className={styles.notification_settings_course_name}>{n.type}</div>
                                    <div>
                                        <input type="checkbox" id={group + id + n.id} className={styles.checkbox} />
                                        <label htmlFor={group + id + n.id} className={styles.switch} ></label>
                                    </div>
                                </div>

                            </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default NotificationSettingsCourse;
