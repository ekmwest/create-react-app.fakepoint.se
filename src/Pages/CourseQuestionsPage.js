import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Questions from '../Components/Questions/Questions';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import api from '../Code/api';

function CourseQuestionsPage() {
    let { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        api.get(`/courses/${id}`, setCourse);
    }, [id]);

    if (course) {
        return (
            <CoursePageLayout title={course.name} courseId={id}>
                <Questions courseId={id}></Questions>
            </CoursePageLayout>

        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CourseQuestionsPage;
