import React from 'react';
import styles from './User.module.css';

function User({ user }) {
    return (
        <div className={styles.user}>
            <div className={styles.avatar}>
                <img src={user.image_url} alt="User"></img>
            </div>
            <div className={styles.name}>
                {user.name}
            </div>
        </div>
    );
}

export default User;
