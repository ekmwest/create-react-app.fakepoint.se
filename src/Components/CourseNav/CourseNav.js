import React from 'react';
import styles from './CourseNav.module.css'

function CourseNav() {
    return (
        <div className={styles.course_nav}>
            <ul>
                <li>
                    Innehåll
                </li>
                <li className={styles.selected}>
                    Nyheter
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


