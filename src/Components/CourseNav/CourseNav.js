import React from 'react';
import styles from './CourseNav.module.css';
import { NavLink } from 'react-router-dom';

function CourseNav({ id }) {

    return (
        <div className={styles.course_nav}>
            <ul>
                <li>
                    Innehåll
                </li>
                <li>
                    <NavLink
                        to={`/courses/${id}/posts`}
                        activeClassName={styles.selected}>
                        Inlägg
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`/courses/${id}/messages`}
                        activeClassName={styles.selected}>
                        Meddelande
                    </NavLink>
                </li>
                <li>
                    Loggbok
                </li>
                <li>
                    LIA
                </li>
                <li>
                    Personal
                </li>
                <li>
                    Om
                </li>
            </ul>
        </div>
    );
}

export default CourseNav;


