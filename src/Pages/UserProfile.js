import React, { useState, useEffect, useRef } from 'react';
import Header from '../Components/Header/Header';
import UserCardTeacher from '../Components/UserCardTeacher/UserCardTeacher';
import UserCardFellowTeacher from '../Components/UserCardFellowTeacher/UserCardFellowTeacher';
import UserCardStudent from '../Components/UserCardStudent/UserCardStudent';
import styles from './UserProfile.module.css';
import api from '../Code/api';

function UserProfile() {

    const teacherItem = useRef();
    const studentItem = useRef();
    const fellowTeacherItem = useRef();
    const [userCardTeacherOpen, setUserCardTeacherOpen] = useState(false);
    const [userCardFellowTeacherOpen, setUserCardFellowTeacherOpen] = useState(false);
    const [userCardStudentOpen, setUserCardStudentOpen] = useState(false);
    const [users, setUsers] = useState([]);

    const handleTeacherCardOpen = () => {
        setUserCardTeacherOpen(true);
    };
    const handleTeacherCardClose = () => {
        setUserCardTeacherOpen(false);
    }

    const handleFellowTeacherCardOpen = () => {
        setUserCardFellowTeacherOpen(true);
    };
    const handleFellowTeacherCardClose = () => {
        setUserCardFellowTeacherOpen(false);
    }

    const handleStudentCardOpen = () => {
        setUserCardStudentOpen(true);
    };
    const handleStudentCardClose = () => {
        setUserCardStudentOpen(false);
    }

    const handleClickOutside = e => {
        if (teacherItem.current.contains(e.target) || studentItem.current.contains(e.target) || fellowTeacherItem.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setUserCardTeacherOpen(false);
        setUserCardStudentOpen(false);
        setUserCardFellowTeacherOpen(false);
    };

    const loadUsers = () => {
        api.get('/users', setUsers);
    }

    useEffect(loadUsers, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (users.length) {
        return (
            <>
                <Header title="LearnPoint profile"></Header>
                <h3>Teacher view</h3>
                <div className={styles.content}>
                    <div className={styles.users}>
                        <div className={styles.user} ref={teacherItem}>
                            <div className={styles.header} >
                                <div className={styles.avatar} onClick={handleTeacherCardOpen}>
                                    <img src="/icons/user-c.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                    Hasse Hannson
                            </div>
                            </div>
                            <div className={styles.note}>View own profile card</div>
                            <UserCardTeacher open={userCardTeacherOpen} handleClose={handleTeacherCardClose}></UserCardTeacher>
                        </div>
                        <div className={styles.user} ref={fellowTeacherItem}>
                            <div className={styles.header} >
                                <div className={styles.avatar} onClick={handleFellowTeacherCardOpen}>
                                    <img src="/icons/user-a.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                    Hasse Hannson
                            </div>
                            </div>
                            <div className={styles.note}>View a fellow teacher's profile card</div>
                            <UserCardFellowTeacher open={userCardFellowTeacherOpen} handleClose={handleFellowTeacherCardClose}></UserCardFellowTeacher>
                        </div>
                        <div className={styles.user} ref={studentItem}>
                            <div className={styles.header} >
                                <div className={styles.avatar} onClick={handleStudentCardOpen}>
                                    <img src="/icons/4.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                    Hasse Hannson
                            </div>
                            </div>
                            <div className={styles.note}>View a student's profile card</div>
                            <UserCardStudent user={users.find(user => user.id === 4)} open={userCardStudentOpen} handleClose={handleStudentCardClose}></UserCardStudent>
                        </div>
                    </div>
                </div>
                <h3>Student View</h3>
                <div className={styles.content}>
                    <div className={styles.users}>
                        <div className={styles.user}>
                            <div className={styles.header} >
                                <div className={styles.avatar} onClick={handleStudentCardOpen}>
                                    <img src="/icons/4.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                    Hasse Hannson
                            </div>
                            </div>
                            <div className={styles.note}>Click avatar to view profile card</div>
                            {/* <UserCardStudent user={users.find(user => user.id === 4)} open={userCardStudentOpen} handleClose={handleStudentCardClose}></UserCardStudent> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (<div></div>);
    }
}

export default UserProfile;
