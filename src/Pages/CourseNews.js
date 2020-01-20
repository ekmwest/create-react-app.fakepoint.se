import React from 'react';
import { useParams } from 'react-router-dom';

function CourseNews() {
    let { id } = useParams();
    return (
        <h1>Course {id} Channel</h1>
    );
}

export default CourseNews;
