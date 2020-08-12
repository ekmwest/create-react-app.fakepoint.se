import React, { useState } from 'react';
import styles from './UserCardStudent.module.css';
import { Link } from 'react-router-dom';

function UserCardStudent({ open, handleClose, user, teacherView, studentView }) {

    const userCardCssClass = () => open ? `${styles.usercard}  ${styles.open}` : `${styles.usercard}`;
    const [userCardImageSlide, setUserCardImageSlide] = useState(false);
    const userCardImageSlideCssClass = () => userCardImageSlide ? `${styles.user_images}  ${styles.slide}` : `${styles.user_images}`;

    const contentCssClass = () => teacherView ? `${styles.content}  ${styles.teacher}` : `${styles.content} `;

    return (
        <div className={userCardCssClass()}>
            <div className={contentCssClass()}>
                <div className={styles.close} onClick={handleClose}> <img src="/icons/close.png" alt="close"></img></div>
                <div className={userCardImageSlideCssClass()}>
                    <div className={styles.avatar_image}>
                        <img src="/icons/4.jpg" alt="User"></img>
                        <div className={styles.overlay} >
                            <div className={styles.profileimg_title}>Profilbild</div> 
                            <Link className={styles.profileimg_edit} to={`/profile`}><img src="/icons/edit.png" alt="Edit"></img></Link>                            
                            <img src="/icons/angle-right.png" alt="User" className={styles.slide_right} onClick={() => setUserCardImageSlide(!userCardImageSlide)}></img>
                        </div>
                    </div>
                    <div className={styles.school_image}>
                        <img src="/icons/user-4.jpeg" alt="User"></img>
                        <div className={styles.overlay}>
                            <div className={styles.schoolphoto_title} to={`/profile`}>Skolfoto </div>
                            <Link className={styles.schoolphoto_edit} to={`/profile`}><img src="/icons/edit.png" alt="Edit"></img></Link>       
                            <img src="/icons/angle-left.png" alt="User" className={styles.slide_left} onClick={() => setUserCardImageSlide(!userCardImageSlide)}></img>
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.full_name}>{user.name}</div>
                    <div className={styles.meta}>{user.email}</div>
                    <div className={styles.meta}>{user.telephone}</div>
                    <Link className={styles.link_to_profile} to={`/profile`}>Gå till profil</Link>
                </div>
            </div>
        </div>
    );
}

export default UserCardStudent;
