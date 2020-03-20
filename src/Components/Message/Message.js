import React from 'react';
import Comment from '../Comment/Comment';
import User from '../User/User';
import styles from './Message.module.css';
import AddComment from '../Comment/AddComment';
import fmt from '../../Code/fmt';
import { Link } from 'react-router-dom';
import linkButtonStyles from '../LinkButton.module.css'

function Message({ post, users, deleteHandler }) {
    return (
        <div className={styles.message}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} bigUserAvatar />
                <div className={styles.meta}>
                    <div>{fmt.date(post.created_at)}</div>
                    <span>•</span>
                    <Link to={`/courses/${post.course.id}/messages`}>{post.course.name}</Link>
                    <span>•</span>
                    <button className={linkButtonStyles.link_button} onClick={deleteHandler}>Delete</button>
                    <span>•</span>
                    <Link to={`/courses/${post.course.id}/messages/${post.id}`}>View</Link>
                </div>
            </div>
            <div className={styles.content}>
                {post.content}
            </div>
        </div>
    );
}

export default Message;
