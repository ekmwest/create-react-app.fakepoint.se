import React, { useContext } from 'react';
import styles from './Header.module.css';
import { SidebarContext } from '../../Contexts/SidebarContext';

function Header({ title }) {
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

    const cssClass = () => sidebarOpen ? `${styles.header} ${styles.sidebar_open}` : `${styles.header}`;

    const buttonTitle = () => sidebarOpen ? 'Hide Menu' : 'Show Menu';

    return (
        <div className={cssClass()}>
            <button onClick={toggleSidebar} title={buttonTitle()}>&equiv;</button>
            <span className={styles.title}>{title}</span>
        </div>
    );
}

export default Header;
