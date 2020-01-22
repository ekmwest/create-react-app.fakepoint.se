import React from 'react';
import styles from './AddComment.module.css';
import useForm from './../../Hooks/useForm';
import css from './../Button.module.css';

function AddComment({ saveComment, postId }) {
    const [values, setValues, changeHandler] = useForm({ content: "", postId });
    const keyDownHandler = event => {
        if (event.key === "Enter" && !event.shiftKey) {
            saveComment(values);
            setValues({ content: "", postId });
        }
    }

    return (
        <div className={styles.add_comment}>
            <div className={styles.comment_textarea}>
                <textarea name="content" value={values.content} onChange={changeHandler} className={styles.content_input} onKeyDown={keyDownHandler} />
            </div>
        </div>
    );
}

export default AddComment;