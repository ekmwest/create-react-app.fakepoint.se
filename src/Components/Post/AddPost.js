import React from 'react';
import styles from './AddPost.module.css';
import useForm from './../../Hooks/useForm';
import User from '../User/User';
import css from './../Button.module.css';

function AddPost({ saveHandler, users }) {
    const [values, setValues, changeHandler] = useForm({ content: "" });
    const onSaveHandler = event => {
        saveHandler(values);
        setValues({ content: "" });
    }

    return (
        <div className={styles.add_post}>
            <div className={styles.post_content}>
                <User user={users.find(user => user.id === 3)} hideUserName="true" />
                <div className={styles.post_textarea}>
                    <textarea placeholder="Add a post..." name="content" value={values.content} onChange={changeHandler} className={styles.content_input} />
                </div>
            </div>
            <div className={styles.post_send}>
                <button className={css.button} onClick={onSaveHandler}>Add</button>
            </div>
        </div>
    );
}

export default AddPost;