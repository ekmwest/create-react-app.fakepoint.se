import React from 'react';
import styles from './AddComment.module.css';
import useForm from './../../Hooks/useForm';

function AddComment({ postId, saveComment }) {
    const [values, changeHandler] = useForm({ content: "", postId });

    return (
        <div className={styles.add_comment}>
            <div>
                <textarea name="content" value={values.content} onChange={changeHandler} className={styles.content_input} />
            </div>
            <div>
                <button onClick={() => saveComment(values)}>Add</button>
            </div>
        </div>
    );
}

export default AddComment;