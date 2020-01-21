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
                {children}
            </main>
        </>
    )
};

export default Master;


