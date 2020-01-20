import React from 'react';
import User from './User'
import './Comment.css';

function Comment({ comment, users }) {
    return (
        <div className="comment">
            <div className="header">
                <User user={users.find(user => user.id === comment.user_id)} />
            </div>
            <div className="content">
                {comment.content}
            </div>
        </div>
    );
}

export default Comment;
