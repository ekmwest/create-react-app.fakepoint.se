import React, { useContext }  from 'react';
import styles from './CourseNav.module.css';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../../Contexts/SidebarContext';

function CourseNav({ id }) {

    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

    const cssClass = () => sidebarOpen ? `${styles.course_nav} ${styles.sidebar_open}` : `${styles.course_nav}`;

    return (
        <div className={cssClass()}>
            <ul>
                <li>
                    <NavLink
                        to={`/courses/${id}/posts`}
                        activeClassName={styles.selected}>
                        Nyheter
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`/courses/${id}/messages`}
                        activeClassName={styles.selected}>
                        Inlägg
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default CourseNav;


