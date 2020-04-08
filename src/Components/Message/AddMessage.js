import React, { useState, useRef, useEffect } from 'react';
import styles from './AddMessage.module.css';
import useForm from '../../Hooks/useForm';
import User from '../User/User';
// import css from './../Button.module.css';

function AddMessage({ saveHandler, users }) {
    const [values, setValues, changeHandler] = useForm({ content: "" });
    const [textareaOpen, setTextareaOpen] = useState(false);
    const [emptyPostError, setEmptyPostError] = useState(false);

    const keyDownHandler = event => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (values.content === "") {
                setEmptyPostError(!emptyPostError);
                return false;
            } else {
                saveHandler(values);
                setValues({ content: "" });
                setTextareaOpen(!textareaOpen);
            }
        }
    }

    const openTextarea = event => {
        if (emptyPostError) {
            setEmptyPostError(!emptyPostError);
        }
        if (!textareaOpen) {
            setTextareaOpen(!textareaOpen);
        }
    }
    const divRefToScroll = useRef(null);

    useEffect(() => {
        divRefToScroll.current.scrollIntoView();
    });


    return (
        <div className={textareaOpen ? `${styles.add_message} ${styles.open}` : `${styles.add_post}`} ref={divRefToScroll} >
            <div className={styles.message_content}>
                <User user={users.find(user => user.id === 4)} hideUserName="true" />
                <div className={styles.message_textarea}>
                    <textarea placeholder="Skriv inlägg..." name="content" value={values.content} onChange={changeHandler} className={emptyPostError ? `${styles.content_input} ${styles.error}` : `${styles.content_input}`} onClick={openTextarea} onKeyDown={keyDownHandler} />
                </div>
            </div>
        </div>
    );
}

export default AddMessage;
