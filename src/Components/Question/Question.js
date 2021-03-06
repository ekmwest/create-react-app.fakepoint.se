import React from 'react';
import User from '../User/User';
import styles from './Question.module.css';
import fmt from '../../Code/fmt';
import { Link } from 'react-router-dom';

function Question({ post, users, deleteHandler }) {

    const comments = () => post.comments.length > 0 ? post.comments.length === 1 ? post.comments.length + " svar" : post.comments.length + " svar" : "";

    return (
        <div className={styles.message}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} bigUserAvatar />
                <div className={styles.meta}>
                    <div>{fmt.date(post.created_at)}</div>
                    •<div><Link to={`/courses/${post.course.id}/posts/${post.id}`}>Svara</Link></div>
                </div>
            </div>
            <div className={styles.content}>
                {post.content}
                <div className={styles.comments}>
                    <Link to={`/courses/${post.course.id}/posts/${post.id}`} className={styles.total_comments}>{comments()}</Link>
                </div>
            </div>
        </div>
    );
}

export default Question;
