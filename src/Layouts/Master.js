import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';
import styles from './Master.module.css'

function Master({ children }) {
    return (
        <>
            <Sidebar></Sidebar>
            <Header></Header>
            <main className={styles.main}>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </>
    )
};

export default Master;


