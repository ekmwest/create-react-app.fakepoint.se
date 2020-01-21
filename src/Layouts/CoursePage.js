import React from 'react';
import styles from './CoursePage.module.css'
import CourseNav from './../Components/CourseNav';

function CoursePage({ children }) {
    return (
        <>
            <CourseNav />
            {children}
        </>
    )
};

export default CoursePage;


