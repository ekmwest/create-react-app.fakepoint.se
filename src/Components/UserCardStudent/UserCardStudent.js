import React,  { useState } from 'react';
import styles from './UserCardStudent.module.css';
import { Link } from 'react-router-dom';

function UserCardStudent({ open, handleClose, user }) {

    const userCardCssClass = () => open ? `${styles.usercard}  ${styles.open}` : `${styles.usercard}`;    
    const [userCardImageSlide, setUserCardImageSlide] = useState(false);
    const userCardImageSlideCssClass = () => userCardImageSlide ? `${styles.user_images}  ${styles.slide}` : `${styles.user_images}`;

    return (
        <div className={userCardCssClass()}>
            <div className={styles.close} onClick={handleClose}> <img src="/icons/close.png" alt="close"></img></div>
            <div className={userCardImageSlideCssClass()}>
                <div className={styles.avatar_image} onClick={() => setUserCardImageSlide(!userCardImageSlide)}>
                    <img src={user.image_url} alt="User"></img>
                    <div className={styles.img_title}>Profilbild</div> 
                </div>
                <div className={styles.school_image} onClick={() => setUserCardImageSlide(!userCardImageSlide)}>
                    <img src={user.image_url} alt="User"></img>
                    <div className={styles.img_title}>Skolfoto</div>
                </div> 
            </div>
            <div className={styles.details}>
                <div className={styles.full_name}>{user.display_name}</div>
                <div className={styles.meta}>{user.email}</div>
                <div className={styles.meta}>{user.telephone}</div>
                <Link className={styles.link_to_profile} to={`/profile`}>Gå till profil</Link>
            </div>
        </div>
    );
}

export default UserCardStudent;
