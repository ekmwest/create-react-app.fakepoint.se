import React, { useContext } from 'react';
import styles from './Header.module.css';
import { SidebarContext } from '../../Contexts/SidebarContext';

function Header({ title }) {
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

    const cssClass = () => sidebarOpen ? `${styles.header} ${styles.sidebar_open}` : `${styles.header}`

    return (
        <div className={cssClass()}>
            <button onClick={toggleSidebar}>=</button>
            {title}
        </div>
    );
}

export default Header;
