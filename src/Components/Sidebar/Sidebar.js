import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import api from '../../Code/api';
import { SidebarContext } from '../../Contexts/SidebarContext';
import { isMobile, isDesktop } from '../../Code/utils';

function Sidebar() {
    const [courses, setCourses] = useState([]);
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);
    const sidebarCssClass = () => sidebarOpen ? `${styles.sidebar}  ${styles.sidebar_open}` : `${styles.sidebar}`;

    const clickHandler = () => {
        if (isMobile()) {
            toggleSidebar();
        }
    }

    useEffect(() => {
        const handleWindowResize = () => {
            if (isMobile() && sidebarOpen) {
                toggleSidebar(); // close sidebar
                return;
            }
            if (isDesktop() && !sidebarOpen) {
                toggleSidebar(); // open sidebar
                return;
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [sidebarOpen, toggleSidebar]);


    useEffect(() => {
        api.get('/courses', setCourses);
    }, []);



    return (
        <div className={sidebarCssClass()}>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName={styles.current} onClick={clickHandler}>Home</NavLink>
                </li>
                <li>
                    <h4>GRUPPER</h4>
                </li>
                {courses.map(course => (
                    <li key={course.id}>
                        <NavLink
                            to={`/courses/${course.id}/posts`}
                            activeClassName={styles.current}
                            onClick={clickHandler}
                            isActive={(match, location) => location.pathname.startsWith(`/courses/${course.id}/`)}
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
