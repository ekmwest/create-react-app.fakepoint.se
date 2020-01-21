import React from 'react';
import User from '../User/User'
import styles from './Comment.module.css';

function Comment({ comment, users }) {
    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === comment.user_id)} />
            </div>
            <div className={styles.content}>
                {comment.content}
            </div>
        </div>
    );
}

export default Comment;
