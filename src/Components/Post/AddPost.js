import React from 'react';
import styles from './AddPost.module.css';
import useForm from './../../Hooks/useForm';
import css from './../Button.module.css'

function AddPost({ saveHandler }) {
    const [values, setValues, changeHandler] = useForm({ content: "" });

    return (
        <div className={styles.add_post}>
            <div className={styles.post_textarea}>
                <textarea name="content" value={values.content} onChange={changeHandler} className={styles.content_input} />
            </div>
            <div>
                <button className={css.button} onClick={() => saveHandler(values)}>Add</button>
            </div>
        </div>
    );
}

export default AddPost;