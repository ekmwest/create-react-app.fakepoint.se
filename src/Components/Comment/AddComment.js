import React from 'react';
import styles from './AddComment.module.css';
import useForm from './../../Hooks/useForm';
import User from '../User/User'

function AddComment({ saveComment, users, postId }) {
    const [values, setValues, changeHandler] = useForm({ content: "", postId });
    const keyDownHandler = event => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            saveComment(values);
            setValues({ content: "", postId });
        }
    }

    return (
        <div className={styles.add_comment}>
            <User user={users.find(user => user.id === 7)} hideUserName="true" />
            <div className={styles.comment_textarea}>
                <form>
                    <textarea rows="1" placeholder="Skriv kommentar..." name="content" value={values.content} onChange={changeHandler} className={styles.content_input} onKeyDown={keyDownHandler} />
                </form>
            </div>

        </div>
    );
}

export default AddComment;