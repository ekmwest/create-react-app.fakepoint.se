import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import api from '../../Code/api';
import { SidebarContext } from '../../Contexts/SidebarContext';
import { isMobile } from '../../Code/utils';

function Sidebar() {
    const [courses, setCourses] = useState([]);
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

    const clickHandler = () => {
        if (isMobile()) {
            toggleSidebar();
        }
    }

    useEffect(() => {
        api.get('/courses', setCourses);
    }, []);

    if (sidebarOpen) {
        return (
            <div className={styles.sidebar}>
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
                            >
                                {course.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div >
        );
    } else {
        return null;
    }
}

export default Sidebar;


