import React, { useState, useRef, useEffect } from 'react';
import styles from './AddQuestion.module.css';
import useForm from '../../Hooks/useForm';
import User from '../User/User';

function AddQuestion({ saveHandler, users }) {
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
        <div className={styles.add_question} ref={divRefToScroll} >
            <div className={styles.content}>
                <div className={styles.message}>
                    <User user={users.find(user => user.id === 4)} hideUserName="true" />
                    <div className={styles.message_textarea}>
                        <textarea placeholder="Skriv inlägg.." name="content" value={values.content} onChange={changeHandler} className={emptyPostError ? `${styles.content_input} ${styles.error}` : `${styles.content_input}`} onClick={openTextarea} onKeyDown={keyDownHandler} />
                    </div>
                </div>
                <div className={styles.message_types}>
                    <div className={styles.message_type}>
                        <img src="/icons/question-mark.png" title="Add a question" alt="question" width="20" height="18" className={styles.question} ></img>
                    </div>
                    <div className={styles.message_type}>
                        <img src="/icons/megaphone.png" title="Add an announcement" alt="megaphone" width="22" height="22"></img>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddQuestion;
