import React from 'react';
import Comment from '../Comment/Comment';
import User from '../User/User';
import styles from './Article.module.css';
import AddThreadMessage from '../Thread/AddThreadMessage';
import ThreadMessage from '../Thread/ThreadMessage';
import fmt from '../../Code/fmt';
import { Link } from 'react-router-dom';
import linkButtonStyles from '../LinkButton.module.css'

function Article({ post, users, deleteHandler, saveCommentHandler }) {
    return (
        <div className={styles.article}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} bigUserAvatar />
                <div className={styles.meta}>
                    <div>{fmt.date(post.created_at)}</div>
                    <span>•</span>
                    <Link to={`/courses/${post.course.id}/articles`}>{post.course.name}</Link>
                </div>
            </div>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.content}>
                {post.content}
            </div>
            <div className={styles.comments}>
                {post.comments.map(comment => (<ThreadMessage key={comment.id} comment={comment} users={users} />))}
                <AddThreadMessage postId={post.id} users={users} saveComment={saveCommentHandler}></AddThreadMessage>
            </div>
        </div>
    );
}

export default Article;
