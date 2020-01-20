import React from 'react';
import { useParams } from 'react-router-dom';

function CourseChannel() {
    let { id } = useParams();
    return (
        <h1>Course {id} Channel</h1>
    );
}

export default CourseChannel;
