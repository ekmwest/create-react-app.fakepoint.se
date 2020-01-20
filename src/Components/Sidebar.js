import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://api.fakepoint.se/courses', {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM='
            }
        })
            .then(res => res.json())
            .then(courses => {
                setCourses(courses);
            })
    }, [])

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <h4>GRUPPER</h4>
                </li>
                {courses.map(course => (
                    <li key={course.id}><Link to={`/courses/${course.id}/news`}>{course.name}</Link></li>
                ))}
            </ul>
        </div >
    );
}

export default Sidebar;


