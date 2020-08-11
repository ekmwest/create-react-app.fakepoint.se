import React from 'react';
import styles from './UserCardFellowStudent.module.css';

function UserCardFellowStudent({ open, handleClose, user }) {

    const userCardCssClass = () => open ? `${styles.usercard}  ${styles.open}` : `${styles.usercard}`;
    
    return (
        <div className={userCardCssClass()}>
            <div className={styles.close} onClick={handleClose}> <img src="/icons/close.png" alt="close"></img></div>
            <div className={styles.user_images}>
                <div className={styles.avatar_image}>
                    <img src={user.image_url} alt="User"></img>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.full_name}>{user.display_name}</div>
                {/* <Link className={styles.link_to_profile} to={`/profile`}>Gå till profil</Link> */}
            </div>
        </div>
    );
}

export default UserCardFellowStudent;
