import React, { useState, useEffect, useRef  } from 'react';
import styles from './User.module.css';
import UserCardStudent from '../UserCardStudent/UserCardStudent';

function User({ user, hideUserName, bigUserAvatar }) {

    const userItem = useRef();
    const [userCardStudentOpen, setUserCardStudentOpen] = useState(false);

    const handleStudentCardOpen = () => {
        setUserCardStudentOpen(true);
    };
    const handleStudentCardClose = () => {
        setUserCardStudentOpen(false);
    }

    const handleClickOutside = e => {
        if (userItem.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setUserCardStudentOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.user} ref={userItem}>
            <div className={bigUserAvatar ? styles.BIG : styles.avatar} onClick={handleStudentCardOpen}>
                <img src={user.image_url} alt="User"></img>
            </div>
            <div className={hideUserName ? styles.HIDE: styles.name}>
                {user.display_name}
            </div>
            <UserCardStudent user={user} open={userCardStudentOpen} handleClose={handleStudentCardClose}></UserCardStudent>
        </div>
    );
}

export default User;
