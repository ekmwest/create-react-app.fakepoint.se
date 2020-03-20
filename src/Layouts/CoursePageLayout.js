import React from 'react';
import CourseNav from '../Components/CourseNav/CourseNav';
import Header from '../Components/Header/Header';
import styles from './CoursePageLayout.module.css';

function CoursePageLayout({ children, title, courseId }) {
    return (
        <>
            <Header title={title} />
            <CourseNav id={courseId} />
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
};

export default CoursePageLayout;
