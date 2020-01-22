import React from 'react';
import styles from './AddComment.module.css';
import useForm from './../../Hooks/useForm';
import css from './../Button.module.css';

function AddComment({ postId, saveComment }) {
    const [values, changeHandler] = useForm({ content: "", postId });

    return (
        <div className={styles.add_comment}>
            <div className={styles.comment_textarea}>
                <textarea name="content" value={values.content} onChange={changeHandler} className={styles.content_input} />
            </div>
            <div>
                <button className={css.button} onClick={() => saveComment(values)}>Add</button>
            </div>
        </div>
    );
}

export default AddComment;