import React, { useContext } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import styles from './MasterLayout.module.css'
import { SidebarContext } from '../Contexts/SidebarContext';
import { isMobile } from '../Code/utils';

function Master({ children }) {
    const { sidebarOpen } = useContext(SidebarContext);

    const cssClass = () => sidebarOpen ? `${styles.main} ${styles.sidebar_open}` : `${styles.main}`;

    const variantCssClass = () => isMobile() ? 'is-mobile' : 'is-desktop';

    return (
        <div className={variantCssClass()}>
            <Sidebar></Sidebar>
            <main className={cssClass()}>
                {children}
            </main>
        </div >
    )
};

export default Master;


