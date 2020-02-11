import React,  { useState} from 'react';
import styles from './AddPost.module.css';
import useForm from './../../Hooks/useForm';
import User from '../User/User';
import css from './../Button.module.css';

function AddPost({ saveHandler, users }) {
    const [values, setValues, changeHandler] = useForm({ content: "" });
    const [textareaOpen, setTextareaOpen] = useState(false);

    const onSaveHandler = event => {
        saveHandler(values);
        setValues({ content: "" });
        setTextareaOpen(!textareaOpen);
    }

    return (
        <div className={textareaOpen ? `${styles.add_post} ${styles.open}` : `${styles.add_post}`}>
            <div className={styles.post_content}>
                <User user={users.find(user => user.id === 4)} hideUserName="true" />
                <div className={styles.post_textarea}>
                    <textarea placeholder="Skriv nyhet..." name="content" value={values.content} onChange={changeHandler} className={styles.content_input} onClick={() => setTextareaOpen(!textareaOpen)} />
                </div>
            </div>
            <div className={styles.post_options}>
                <button className={css.button} onClick={() => setTextareaOpen(!textareaOpen)}>Avbryt</button>
                <button className={[css.button, css.PRIMARY].join(' ')}  onClick={onSaveHandler}>Spara</button>
            </div>
        </div>
    );
}

export default AddPost;