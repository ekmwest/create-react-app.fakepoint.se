import React,  { useState }  from 'react';
import styles from './UserCardTeacher.module.css';
import { Link } from 'react-router-dom';

function UserCardTeacher({ open, handleClose }) {

    const userCardCssClass = () => open ? `${styles.usercard}  ${styles.open}` : `${styles.usercard}`;
    const [userCardImageSlide, setUserCardImageSlide] = useState(false);
    const userCardImageSlideCssClass = () => userCardImageSlide ? `${styles.user_images}  ${styles.slide}` : `${styles.user_images}`;

    return (
        <div className={userCardCssClass()}>
            <div className={styles.close} onClick={handleClose}> <img src="/icons/close.png" alt="close"></img></div>
            <div className={userCardImageSlideCssClass()}>
                <div className={styles.avatar_image} onClick={() => setUserCardImageSlide(!userCardImageSlide)}>
                    <img src="/icons/user-a.jpg" alt="User"></img>
                    <div className={styles.img_title}>Profilbild</div>
                </div>
                <div className={styles.school_image} onClick={() => setUserCardImageSlide(!userCardImageSlide)}>
                    <img src="/icons/user-b.jpg" alt="User"></img>
                    <div  className={styles.img_title}>Skolfoto</div>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.full_name}>Hasse Hannson</div>
                <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                <div className={styles.meta}>08759789</div>
                <Link className={styles.link_to_profile} to={`/profile`}>Gå till profil</Link>
            </div>
        </div>
    );
}

export default UserCardTeacher;
