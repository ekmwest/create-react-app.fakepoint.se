import React from 'react';
import Comment from './Comment';

function Post({ post, users }) {
    return (
        <>
            <div className="post">
                <div className="content">
                    {post.content}
                </div>
            </div>
            {post.comments.map(comment => (<Comment key={comment.id} comment={comment} users={users} />))}
        </>
    );
}

export default Post;
