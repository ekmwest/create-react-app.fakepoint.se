import React from 'react';
import styles from './AddPost.module.css';
import useForm from './../../Hooks/useForm';

function AddPost({ saveHandler }) {
    const [values, changeHandler] = useForm({ content: "" });

    return (
        <div className={styles.add_post}>
            <div>
                <textarea name="content" value={values.content} onChange={changeHandler} className={styles.content_input} />
            </div>
            <div>
                <button onClick={() => saveHandler(values)}>Save</button>
            </div>
        </div>
    );
}

export default AddPost;