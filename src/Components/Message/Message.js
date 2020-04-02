 import React from 'react';
import User from '../User/User';
import styles from './Message.module.css';
import fmt from '../../Code/fmt';
import { Link } from 'react-router-dom';

function Message({ post, users, deleteHandler }) {

    const comments = () => post.comments.length > 0 ? post.comments.length == 1 ?  post.comments.length + " Kommentar" :  post.comments.length + " Kommentarer" : "Kommentera";

    return (
        <div className={styles.message}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} bigUserAvatar />
                <div className={styles.meta}>
                    <div>{fmt.date(post.created_at)}</div>
                </div>
            </div>
            <div className={styles.content}>
                {post.content} <Link to={`/courses/${post.course.id}/messages/${post.id}`} className={styles.total_comments}>{comments()}</Link>
            </div>
        </div>
    );
}

export default Message;
