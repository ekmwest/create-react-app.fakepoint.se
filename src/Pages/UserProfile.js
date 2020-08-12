import React, { useState, useEffect, useRef } from 'react';
import Header from '../Components/Header/Header';
import UserCardTeacher from '../Components/UserCardTeacher/UserCardTeacher';
import UserCardFellowTeacher from '../Components/UserCardFellowTeacher/UserCardFellowTeacher';
import UserCardFellowStudent from '../Components/UserCardFellowStudent/UserCardFellowStudent';
import UserCardStudent from '../Components/UserCardStudent/UserCardStudent';
import styles from './UserProfile.module.css';
import api from '../Code/api';

function UserProfile() {

    const teacherItem = useRef();
    const teacherItem1 = useRef();
    const fellowTeacherItem = useRef();

    const studentItem = useRef();
    const studentItem1 = useRef();
    const fellowStudentItem = useRef();

    const [userCardTeacherOpen, setUserCardTeacherOpen] = useState(false);
    const [userCardTeacher1Open, setUserCardTeacher1Open] = useState(false);
    const [userCardFellowTeacherOpen, setUserCardFellowTeacherOpen] = useState(false);

    const [userCardStudentOpen, setUserCardStudentOpen] = useState(false);
    const [userCardStudent1Open, setUserCardStudent1Open] = useState(false);
    const [userCardFellowStudentOpen, setUserCardFellowStudentOpen] = useState(false);

    const [users, setUsers] = useState([]);

    const handleTeacherCardOpen = () => {
        setUserCardTeacherOpen(true);
    };
    const handleTeacherCardClose = () => {
        setUserCardTeacherOpen(false);
    }

    const handleTeacherCard1Open = () => {
        setUserCardTeacher1Open(true);
    };
    const handleTeacherCard1Close = () => {
        setUserCardTeacher1Open(false);
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

    const handleFellowStudentCardOpen = () => {
        setUserCardFellowStudentOpen(true);
    };
    const handleFellowStudentCardClose = () => {
        setUserCardFellowStudentOpen(false);
    }

    const handleStudentCard1Open = () => {
        setUserCardStudent1Open(true);
    };
    const handleStudentCard1Close = () => {
        setUserCardStudent1Open(false);
    }


    const handleClickOutside = e => {
        if (teacherItem.current.contains(e.target) || studentItem.current.contains(e.target) || fellowTeacherItem.current.contains(e.target) 
        || teacherItem1.current.contains(e.target) || studentItem1.current.contains(e.target) || fellowStudentItem.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setUserCardTeacherOpen(false);
        setUserCardStudentOpen(false);
        setUserCardFellowTeacherOpen(false);
        setUserCardTeacher1Open(false);
        setUserCardStudent1Open(false);
        setUserCardFellowStudentOpen(false);
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
                                    <img src="/icons/2.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                    Linda M
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
                                    Hasse H
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
                                    Carrie C
                            </div>
                            </div>
                            <div className={styles.note}>View a student's profile card</div>
                            <UserCardStudent user={users.find(user => user.id === 4)} open={userCardStudentOpen} handleClose={handleStudentCardClose} teacherView={true}></UserCardStudent>
                        </div>
                    </div>
                </div>
                <h3>Student View</h3>
                <div className={styles.content}>
                    <div className={styles.users}>
                        <div className={styles.user} ref={studentItem1}>
                            <div className={styles.header} >
                                <div className={styles.avatar} onClick={handleStudentCard1Open}>
                                    <img src="/icons/4.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                    Carrie C
                                </div>
                            </div>
                            <div className={styles.note}>View own profile card</div>
                            <UserCardStudent user={users.find(user => user.id === 4)} open={userCardStudent1Open} handleClose={handleStudentCard1Close} studentView={true}></UserCardStudent>
                        </div>
                        <div className={styles.user} ref={fellowStudentItem}>
                            <div className={styles.header} >
                                <div className={styles.avatar} onClick={handleFellowStudentCardOpen}>
                                    <img src="/icons/1.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                    Harry H
                                </div>
                            </div>
                            <div className={styles.note}>View fellow student profile card</div>
                            <UserCardFellowStudent user={users.find(user => user.id === 1)} open={userCardFellowStudentOpen} handleClose={handleFellowStudentCardClose}></UserCardFellowStudent>
                        </div>
                        <div className={styles.user} ref={teacherItem1}>
                            <div className={styles.header} >
                                <div className={styles.avatar} onClick={handleTeacherCard1Open}>
                                    <img src="/icons/user-a.jpg" alt="User"></img>
                                </div>
                                <div className={styles.name}>
                                   Hasse H
                                </div>
                            </div>
                            <div className={styles.note}>View staff profile card</div>
                            <UserCardFellowTeacher open={userCardTeacher1Open} handleClose={handleTeacherCard1Close}></UserCardFellowTeacher>
                        </div>
                    </div>
                </div>
                <div className={styles.space}></div>
            </>
        );
    }
    else {
        return (<div></div>);
    }
}

export default UserProfile;
