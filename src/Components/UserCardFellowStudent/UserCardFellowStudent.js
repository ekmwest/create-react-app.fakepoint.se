import React, { useState } from 'react';
import styles from './UserCardFellowStudent.module.css';
import { Link } from 'react-router-dom';

function UserCardFellowStudent({ open, handleClose, user }) {

    const userCardCssClass = () => open ? `${styles.usercard}  ${styles.open}` : `${styles.usercard}`;
    const [userCardImageSlide, setUserCardImageSlide] = useState(false);
    const userCardImageSlideCssClass = () => userCardImageSlide ? `${styles.user_images}  ${styles.slide}` : `${styles.user_images}`;

    return (
        <div className={userCardCssClass()}>
            <div className={styles.close} onClick={handleClose}> <img src="/icons/close.png" alt="close"></img></div>
            <div className={styles.user_images}>
                <div className={styles.avatar_image}>
                    <img src={user.image_url} alt="User"></img>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.full_name}>{user.name}</div>
                <Link className={styles.link_to_profile} to={`/profile`}>Gå till profil</Link>
            </div>
        </div>
    );
}

export default UserCardFellowStudent;
