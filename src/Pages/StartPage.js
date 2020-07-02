import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import styles from './StartPage.module.css';
import { Link } from 'react-router-dom';
import api from '../Code/api';

function StartPage() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        api.get('/courses', setCourses);
    }, []);


    return (
        <>
            <Header title="Start Page"></Header>
            <div className={styles.content}>
                <h2>Att göra</h2>
                <div className={styles.notification_list}>
                    <div className={styles.notification}>
                        <img src="/icons/bell.png" className={styles.notification_icon} alt="notification"></img>

                        <div className={styles.notification_content}>
                            Du behöver godkänna en LIA-plats
                    </div>
                    </div>
                    <div className={styles.notification}>
                        <img src="/icons/bell.png" className={styles.notification_icon} alt="notification"></img>
                        <div className={styles.notification_content}>

                            Kursutvärdering Att arbeta i näringslivet
                    </div>
                    </div>
                    <div className={styles.notification}>
                        <img src="/icons/bell.png" className={styles.notification_icon} alt="notification"></img>
                        <div className={styles.notification_content}>
                            Kursutvärdering Presentationsteknik
                    </div>
                    </div>
                </div>
                
                <h2>Grupper</h2>
                <div className={styles.course_list}>
                    {courses.map(course => (
                        <div className={styles.course} key={course.id}>
                            <Link
                                to={`/courses/${course.id}/posts`}
    
                            >
                                {course.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default StartPage;
