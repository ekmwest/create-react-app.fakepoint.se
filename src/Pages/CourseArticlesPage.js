import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Articles from '../Components/Articles/Articles';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import api from '../Code/api';

function CourseArticlesPage() {
    let { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        api.get(`/courses/${id}`, setCourse);
    }, [id]);

    if (course) {
        return (
            <CoursePageLayout title={course.name} courseId={id}>
                <Articles courseId={id}></Articles>
            </CoursePageLayout>

        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CourseArticlesPage;
