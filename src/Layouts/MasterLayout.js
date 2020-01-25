import React, { useContext } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import styles from './MasterLayout.module.css'
import { SidebarContext } from '../Contexts/SidebarContext';

function Master({ children }) {
    const { sidebarOpen } = useContext(SidebarContext);

    const cssClass = () => sidebarOpen ? `${styles.main} ${styles.sidebar_open}` : `${styles.main}`

    return (
        <>
            <Sidebar></Sidebar>
            <main className={cssClass()}>
                {children}
            </main>
        </>
    )
};

export default Master;


