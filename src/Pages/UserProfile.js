import React, { useState, useEffect, useRef } from 'react';
import Header from '../Components/Header/Header';
import UserCardTeacherView from '../Components/UserCardTeacherView/UserCardTeacherView';
// import UserCardStudentView from '../Components/UserCardStudentView/UserCardStudentView';
import styles from './UserProfile.module.css';

function UserProfile() {

    const node = useRef();
    const [userCardOpen, setUserCardOpen] = useState(false);

    const handleOpen= () => {
        setUserCardOpen(true);
      };
      const handleClose = ()=>{
        setUserCardOpen(false);
      }

      const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setUserCardOpen(false);
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
            <div className={styles.content}>
                <div className={styles.users}>
                    <div className={styles.user} ref={node}>
                        <div className={styles.header} >
                            <div className={styles.avatar} onClick={handleOpen}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Hasse H
                            </div>
                        </div>
                       
                        <div className={styles.note}>Teacher View</div>
                        <UserCardTeacherView open={userCardOpen} handleClose={handleClose}></UserCardTeacherView>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.header}>
                            <div className={styles.avatar}>
                                <img src="/icons/user-4.jpeg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Hasse H
                            </div>
                        </div>                    
                         <div className={styles.note}>Student View</div>
                        {/*<UserCardStudentView></UserCardStudentView> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
