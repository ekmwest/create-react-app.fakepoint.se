import React from 'react';
import CourseNav from '../Components/CourseNav/CourseNav';
import styles from './CoursePage.module.css';

function CoursePage({ children }) {
    return (
        <>
            <CourseNav />
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
};

export default CoursePage;


