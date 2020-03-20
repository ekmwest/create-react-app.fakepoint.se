import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Messages from '../Components/Messages/Messages';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import api from '../Code/api';

function CourseMessagesPage() {
    let { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        api.get(`/courses/${id}`, setCourse);
    }, [id]);

    if (course) {
        return (
            <CoursePageLayout title={course.name} courseId={id}>
                <Messages courseId={id}></Messages>
            </CoursePageLayout>

        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CourseMessagesPage;
