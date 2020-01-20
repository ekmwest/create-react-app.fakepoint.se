import React from 'react';
import './Comment.css';

function Comment({ comment, users }) {

    return (
        <div className="comment">
            <div className="content">
                {comment.content}
            </div>
        </div>
    );
}

export default Comment;
