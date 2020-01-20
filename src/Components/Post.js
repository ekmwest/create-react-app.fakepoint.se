import React from 'react';
import Comment from './Comment';
import './Post.css';

function Post({ post, users }) {
    return (
        <div className="post">
            <div className="content">
                {post.content}
            </div>
            {post.comments.map(comment => (<Comment key={comment.id} comment={comment} users={users} />))}
        </div>
    );
}

export default Post;
