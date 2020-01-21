import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'

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
        <div className={styles.sidebar}>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName={styles.current}>Home</NavLink>
                </li>
                <li>
                    <h4>GRUPPER</h4>
                </li>
                {courses.map(course => (
                    <li key={course.id}>
                        <NavLink
                            exact
                            to={`/courses/${course.id}/posts`}
                            activeClassName={styles.current}
                        >
                            {course.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Sidebar;


