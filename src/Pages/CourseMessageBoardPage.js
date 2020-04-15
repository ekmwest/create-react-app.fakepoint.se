import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageBoard from '../Components/MessageBoard/MessageBoard';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import api from '../Code/api';

function CourseMessageBoardPage() {
    let { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        api.get(`/courses/${id}`, setCourse);
    }, [id]);

    if (course) {
        return (
            <CoursePageLayout title={course.name} courseId={id}>
                <MessageBoard courseId={id}></MessageBoard>
            </CoursePageLayout>

        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CourseMessageBoardPage;
