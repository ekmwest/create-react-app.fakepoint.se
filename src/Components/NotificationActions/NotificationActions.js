import React, { useState } from 'react';
import styles from './NotificationActions.module.css';

function NotificationActions({type, group}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={open ? styles.notification_actions_open : styles.notification_actions} onClick={() => setOpen(!open)}>
            <div className={styles.notification_actions_icon}>
            </div>
            <div className={styles.notification_action_items}>
                <div className={styles.notification_action_item}>
                    Mark as read
            </div>
                <div className={styles.notification_action_item}>
                    Unsubscribe
            </div>
                <div className={styles.notification_action_item}>
                    Unsubscribe from {type} in {group}
                </div>
            </div>
        </div>
    );
}

export default NotificationActions;
