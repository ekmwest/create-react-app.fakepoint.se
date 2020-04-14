import React from 'react';
import User from '../User/User'
import styles from './ThreadMessage.module.css';
import fmt from '../../Code/fmt';

function ThreadMessage({ comment, users }) {
    return (
        <div className={styles.threadmessage}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === comment.user_id)} />
                <div className={styles.created_at}>{fmt.date(comment.created_at)}</div>
            </div>
            <div className={styles.content}>
                {comment.content}
            </div>
        </div>
    );
}

export default ThreadMessage;
