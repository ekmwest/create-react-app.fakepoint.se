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
                        to={`/courses/${id}/news`}
                        activeClassName={styles.selected}>
                        Nyheter
                    </NavLink>
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
                        to={`/courses/${id}/articles`}
                        activeClassName={styles.selected}>
                        Artiklar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`/courses/${id}/questions`}
                        activeClassName={styles.selected}>
                        Questions
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default CourseNav;
