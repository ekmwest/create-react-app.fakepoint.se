import React from 'react';
import Comment from '../Comment/Comment';
import User from '../User/User';
import styles from './Post.module.css';
import fmt from '../../Code/fmt';

function Post({ post, users, deleteHandler }) {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} />
                <div className={styles.created_at}>{fmt.date(post.created_at)}</div>
                <button onClick={deleteHandler}>Delete</button>
            </div>
            <div className={styles.content}>
                {post.content}
            </div>
            {post.comments.map(comment => (<Comment key={comment.id} comment={comment} users={users} />))}
        </div>
    );
}

export default Post;
