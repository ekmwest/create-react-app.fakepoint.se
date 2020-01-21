import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import styles from './MasterLayout.module.css'

function Master({ children }) {
    return (
        <>
            <Sidebar></Sidebar>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
};

export default Master;


