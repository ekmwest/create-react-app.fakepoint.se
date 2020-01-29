import React, { useContext } from 'react';
import styles from './Header.module.css';
import { SidebarContext } from '../../Contexts/SidebarContext';
import Notifications from '../Notifications/Notifications';

function Header({ title }) {
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

    const cssClass = () => sidebarOpen ? `${styles.header} ${styles.sidebar_open}` : `${styles.header}`;

    const buttonTitle = () => sidebarOpen ? 'Hide Menu' : 'Show Menu';

    return (
        <div className={cssClass()}>
            <div className={styles.left_panel}>
                <button onClick={toggleSidebar} title={buttonTitle()}>&equiv;</button>
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.right_panel}>
                <Notifications />
            </div>
        </div>
    );
}

export default Header;
