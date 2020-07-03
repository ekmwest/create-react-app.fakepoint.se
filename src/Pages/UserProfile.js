import React, { useState, useEffect, useRef } from 'react';
import Header from '../Components/Header/Header';
import UserCardTeacher from '../Components/UserCardTeacher/UserCardTeacher';
import UserCardStudent from '../Components/UserCardStudent/UserCardStudent';
import styles from './UserProfile.module.css';

function UserProfile() {

    const teacherItem = useRef();
    const studentItem = useRef();
    const [userCardTeacherOpen, setUserCardTeacherOpen] = useState(false);
    const [userCardStudentOpen, setUserCardStudentOpen] = useState(false);

    const handleTeacherCardOpen = () => {
        setUserCardTeacherOpen(true);
    };
    const handleTeacherCardClose = () => {
        setUserCardTeacherOpen(false);
    }

    const handleStudentCardOpen = () => {
        setUserCardStudentOpen(true);
    };
    const handleStudentCardClose = () => {
        setUserCardStudentOpen(false);
    }

    const handleClickOutside = e => {
        if (teacherItem.current.contains(e.target) || studentItem.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setUserCardTeacherOpen(false);
        setUserCardStudentOpen(false);
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>
            <Header title="LearnPoint profile"></Header>
            <h3>Teacher view</h3>
            <div className={styles.content}>
                <div className={styles.users}>
                    <div className={styles.user} ref={teacherItem}>
                        <div className={styles.header} >
                            <div className={styles.avatar} onClick={handleTeacherCardOpen}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Hasse Hannson
                            </div>
                        </div>
                        <div className={styles.note}>Click avatar to view profile card</div>
                        <UserCardTeacher open={userCardTeacherOpen} handleClose={handleTeacherCardClose}></UserCardTeacher>
                    </div>
                </div>
            </div>
            <h3>Student View</h3>
            <div className={styles.content}>
                <div className={styles.users}>
                    <div className={styles.user} ref={studentItem}>
                        <div className={styles.header} >
                            <div className={styles.avatar} onClick={handleStudentCardOpen}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Hasse Hannson
                            </div>
                        </div>
                        <div className={styles.note}>Click avatar to view profile card</div>
                        <UserCardStudent open={userCardStudentOpen} handleClose={handleStudentCardClose}></UserCardStudent>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
