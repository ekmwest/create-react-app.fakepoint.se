import React, {useState} from 'react';
import styles from './NotificationSettingsCourse.module.css';

function NotificationSettingsCourse(open) {

    const [checked, setChecked] = React.useState(true);

    return (
        <div className={open.open ? styles.notification_settings_course_type_list_open : styles.notification_settings_course_type_list}>
            <div className={styles.notification_settings_type}>

                <div className={styles.notification_settings_course_header}>
                    <div className={styles.notification_settings_course_name}>Comments on result items </div>
                    <div>
                        <input type="checkbox" id="7" className={styles.checkbox} />
                        <label for="7" className={styles.switch} ></label>
                    </div>
                </div>

            </div>
            <div className={styles.notification_settings_type}>

                <div className={styles.notification_settings_course_header}>
                    <div className={styles.notification_settings_course_name}>Newsfeed</div>
                    <div>
                        <input type="checkbox" id="8"  defaultChecked={checked} className={styles.checkbox} />
                        <label for="8" className={styles.switch} ></label>
                    </div>
                </div>

            </div>
            <div className={styles.notification_settings_type}>

                <div className={styles.notification_settings_course_header}>
                    <div className={styles.notification_settings_course_name}>Logbook </div>
                    <div>
                        <input type="checkbox" id="9" className={styles.checkbox} />
                        <label for="9" className={styles.switch} ></label>
                    </div>
                </div>

            </div>
            <div className={styles.notification_settings_type}>

                <div className={styles.notification_settings_course_header}>
                    <div className={styles.notification_settings_course_name}>Survey to answer</div>
                    <div>
                        <input type="checkbox" id="10" className={styles.checkbox} />
                        <label for="10" className={styles.switch} ></label>
                    </div>
                </div>

            </div>
            <div className={styles.notification_settings_type}>

                <div className={styles.notification_settings_course_header}>
                    <div className={styles.notification_settings_course_name}>LIA approval </div>
                    <div>
                        <input type="checkbox" id="11"  defaultChecked={checked} className={styles.checkbox} />
                        <label for="11" className={styles.switch} ></label>
                    </div>
                </div>

            </div>
            <div className={styles.notification_settings_type}>

                <div className={styles.notification_settings_course_header}>
                    <div className={styles.notification_settings_course_name}>Submissions</div>
                    <div>
                        <input type="checkbox" id="12"  defaultChecked={checked} className={styles.checkbox} />
                        <label for="12" className={styles.switch} ></label>
                    </div>
                </div>

            </div>
        </div>
        
    );
}

export default NotificationSettingsCourse;
