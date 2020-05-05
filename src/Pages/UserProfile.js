import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import styles from './UserProfile.module.css';
import api from '../Code/api';
import UserCard from '../Components/UserCard/UserCard';

function UserProfile() {

    const [userCard2Open, setUserCard2Open] = useState(false);
    const [userCard1Open, setUserCard1Open] = useState(false);
    const userCard1CssClass = () => userCard1Open ? `${styles.usercard_1}  ${styles.open}` : `${styles.usercard_1}`;
    const userCard2CssClass = () => userCard2Open ? `${styles.usercard_2}  ${styles.open}` : `${styles.usercard_2}`;
    const overlayCssClass = () => userCard1Open ? `${styles.overlay}  ${styles.open}` : `${styles.overlay}`;

    return (
        <>
            <Header title="Usercards"></Header>
            <div className={overlayCssClass()}></div>
            <div className={styles.content}>
                <div className={styles.users}>

                    <div className={styles.user_1} onClick={() => setUserCard1Open(!userCard1Open)}>
                        <div className={styles.header}>
                            <div className={styles.avatar}>
                                <img src="/icons/user-4.jpeg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Raechal H
                            </div>
                        </div>
                        <div className={userCard1CssClass()}>
                            <div className={styles.close} onClick={() => setUserCard1Open(!userCard1Open)}><img src="/icons/close.png" alt="close"></img></div>
                            <div className={styles.avatar_big}>
                                <img src="/icons/user-4.jpeg" alt="User"></img>
                            </div>
                            Rachal Hamilton
                            <div>rachel.hamilton@fakepoint.se</div>
                            <div>08759789</div>
                        </div>
                        <div className={styles.note}>Click to display user modal</div>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.header}>
                            <div className={styles.avatar} >
                                <img src="/icons/user-1.jpeg" alt="User"></img>
                            </div>
                            <div className={styles.name} >
                                Sandy R
                            </div>
                        </div>
                        <div className={styles.usercard}>
                            <div className={styles.avatar_big}>
                                <img src="/icons/user-1.jpeg" alt="User"></img>
                            </div>
                            Sandy Richard
                            <div>sandy.richard@fakepoint.se</div>
                            <div>08759789</div>
                        </div>
                        <div className={styles.note}>Hover to display user card</div>
                    </div>
                    <div className={styles.user_2} onClick={() => setUserCard2Open(!userCard2Open)}>
                        <div className={styles.header}>
                            <div className={styles.avatar}>
                                <img src="/icons/user-3.jpeg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Hasse H
                            </div>
                        </div>
                        <div className={userCard2CssClass()}>
                            <div className={styles.close} onClick={() => setUserCard2Open(!userCard2Open)}> <img src="/icons/close.png" alt="close"></img></div>
                            <div className={styles.avatar_big}>
                                <img src="/icons/user-3.jpeg" alt="User"></img>
                            </div>
                            Hasse Hannson
                            <div>hasse.hannson@fakepoint.se</div>
                            <div>08759789</div>
                        </div>
                        <div className={styles.note}>Click to display user card</div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserProfile;
