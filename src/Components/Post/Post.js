import React from 'react';
import Comment from '../Comment/Comment';
import User from '../User/User';
import styles from './Post.module.css';
import AddComment from '../Comment/AddComment';
import fmt from '../../Code/fmt';
import { Link } from 'react-router-dom';
import linkButtonStyles from '../LinkButton.module.css'

function Post({ post, users, deleteHandler, saveCommentHandler }) {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} bigUserAvatar />
                <div className={styles.meta}>
                    <div>{fmt.date(post.created_at)}</div>
                    <span>•</span>
                    <Link to={`/courses/${post.course.id}/posts`}>{post.course.name}</Link>
                    <span>•</span>
                    <button className={linkButtonStyles.link_button} onClick={deleteHandler}>Delete</button>
                    <span>•</span>
                    <Link to={`/courses/${post.course.id}/posts/${post.id}`}>View</Link>
                </div>
            </div>
            <div className={styles.content}>
                {post.content}
            </div>
            <div className={styles.comments}>
                {post.comments.map(comment => (<Comment key={comment.id} comment={comment} users={users} />))}
                <AddComment postId={post.id} users={users} saveComment={saveCommentHandler}></AddComment>
            </div>
        </div>
    );
}

export default Post;
