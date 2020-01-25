import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Components/Posts/Posts';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import api from '../Code/api';

function CoursePostsPage() {
    let { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        api.get(`/courses/${id}`, setCourse); 
    }, [id]);

    if (course) {
        return (
            <CoursePageLayout title={course.name}>
                <Posts courseId={id}></Posts>
            </CoursePageLayout>
        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CoursePostsPage;
