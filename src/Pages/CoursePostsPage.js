import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Components/Posts/Posts';
import CoursePageLayout from '../Layouts/CoursePageLayout';


function CoursePostsPage() {
    let { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`https://api.fakepoint.se/courses/${id}`, {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM='
            }
        })
            .then(res => res.json())
            .then(course => setCourse(course));
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
