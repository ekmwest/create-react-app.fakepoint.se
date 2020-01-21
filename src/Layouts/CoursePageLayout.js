import React from 'react';
import CourseNav from '../Components/CourseNav/CourseNav';
import Header from '../Components/Header/Header';
import styles from './CoursePageLayout.module.css';

function CoursePageLayout({ children, title }) {
    return (
        <>
            <Header title={title} />
            <CourseNav />
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
};

export default CoursePageLayout;
