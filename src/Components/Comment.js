import React from 'react';

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
