import React  from 'react';
import styles from './UserCardTeacher.module.css';
import { Link } from 'react-router-dom';

function UserCardTeacher({ open, handleClose }) {

    const userCardCssClass = () => open ? `${styles.usercard}  ${styles.open}` : `${styles.usercard}`;

    return (
        <div className={userCardCssClass()}>
            <div className={styles.close} onClick={handleClose}> <img src="/icons/close.png" alt="close"></img></div>
            <div className={styles.user_images}>
                <div className={styles.avatar_image}>
                    <img src="/icons/user-c.jpg" alt="User"></img>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.full_name}>Linda Mason</div>
                <div className={styles.meta}>linda.mason@fakepoint.se</div>
                <div className={styles.meta}>08759789</div>
                <Link className={styles.link_to_profile} to={`/profile`}>Min profil</Link>
            </div>
        </div>
    );
}

export default UserCardTeacher;
