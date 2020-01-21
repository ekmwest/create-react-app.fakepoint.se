import React from 'react';
import styles from './AddPost.module.css';

function AddPost() {
    return (
        <div className={styles.add_post}>
            <div>
                <textarea className={styles.content_input}></textarea>
            </div>
            <div>
                <button>Save</button>
            </div>
        </div>
    );
}

export default AddPost;