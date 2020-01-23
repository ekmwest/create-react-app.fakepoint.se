import React from 'react';
import styles from './AddComment.module.css';
import useForm from './../../Hooks/useForm';
import User from '../User/User'

function AddComment({ saveComment, users, postId }) {
    const [values, setValues, changeHandler] = useForm({ content: "", postId });
    const keyDownHandler = event => {
        if (event.key === "Enter" && !event.shiftKey) {
            saveComment(values);
            setValues({ content: "", postId });
        }
    }

    return (
        <div className={styles.add_comment}>
            <User user={users.find(user => user.id === 3)} hideUserName="true" />
            <div className={styles.comment_textarea}>
                <textarea rows="1" placeholder="Add a comment..." name="content" value={values.content} onChange={changeHandler} className={styles.content_input} onKeyDown={keyDownHandler} />
            </div>
        </div>
    );
}

export default AddComment;