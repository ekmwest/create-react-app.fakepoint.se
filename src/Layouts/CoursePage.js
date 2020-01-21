import React from 'react';
import CourseNav from '../Components/CourseNav/CourseNav';

function CoursePage({ children }) {
    return (
        <>
            <CourseNav />
            {children}
        </>
    )
};

export default CoursePage;


