import React, { useState } from 'react';
import styles from './UserCard.module.css';

function UserCard({ user }) {

    const [userCardOpen, setUserCardOpen] = useState(false);
    const userCardCssClass = () => userCardOpen ? `${styles.usercard}  ${styles.open}` : `${styles.usercard}`;

    return (
        <div className={styles.user}>
            <div className={styles.header}>
                <div className={styles.avatar} onClick={() => setUserCardOpen(!userCardOpen)}>
                    <img src={user.image_url} alt="User"></img>
                </div>
                <div className={styles.name} onClick={() => setUserCardOpen(!userCardOpen)}>
                    {user.display_name}
                </div>
            </div>
            <div className={userCardCssClass()}>
                <div className={styles.close} onClick={() => setUserCardOpen(!userCardOpen)}>Close</div>
                <div className={styles.avatar_big}>
                    <img src={user.image_url} alt="User"></img>
                </div>
                {user.name}
                <div>{user.email}</div>
                <div>{user.telephone}</div>
            </div>
            <div className={styles.note}>Click to display user card</div>
        </div>
    );
}

export default UserCard;
