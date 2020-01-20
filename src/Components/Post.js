import React from 'react';
import Comment from './Comment';
import User from './User';
import './Post.css';

function Post({ post, users }) {
    return (
        <div className="post">
            <div className="header">
                <User user={users.find(user => user.id === post.user_id)} />
            </div>
            <div className="content">
                {post.content}
            </div>
            {post.comments.map(comment => (<Comment key={comment.id} comment={comment} users={users} />))}
        </div>
    );
}

export default Post;
