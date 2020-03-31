import React from 'react';
import styles from './User.module.css';

function User({ user, hideUserName, bigUserAvatar }) {
    return (
        <div className={styles.user}>
            <div className={bigUserAvatar ? styles.BIG : styles.avatar}>
                <img src={user.image_url} alt="User"></img>
            </div>
            <div className={hideUserName ? styles.HIDE: styles.name}>
                {user.display_name}
            </div>
        </div>
    );
}

export default User;
