import React from 'react';
import styles from './AddPost.module.css';
import useForm from './../../Hooks/useForm';
import css from './../Button.module.css'

function AddPost({ saveHandler }) {
    const [values, setValues, changeHandler] = useForm({ content: "" });
    const onSaveHandler = event => {
        saveHandler(values);
        setValues({ content: "" });
    }

    return (
        <div className={styles.add_post}>
            <div className={styles.post_textarea}>
                <textarea placeholder="Add a post..." name="content" value={values.content} onChange={changeHandler} className={styles.content_input} />
            </div>
            <div className={styles.post_send}>
                <button className={css.button} onClick={onSaveHandler}>Add</button>
            </div>
        </div>
    );
}

export default AddPost;