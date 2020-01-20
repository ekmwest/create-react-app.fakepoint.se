import React from 'react';
import Comment from './Comment';
import User from './User';
import styles from './Post.module.css';

function Post({ post, users }) {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} />
            </div>
            <div className={styles.content}>
                {post.content}
            </div>
            {post.comments.map(comment => (<Comment key={comment.id} comment={comment} users={users} />))}
        </div>
    );
}

export default Post;
