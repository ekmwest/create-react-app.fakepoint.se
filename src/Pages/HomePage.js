import React from 'react';
import Header from '../Components/Header/Header';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <>
            <Header title="Home"></Header>
            <div className={styles.content}>
                <h1>Home</h1>
            </div>
        </>
    );
}

export default HomePage;
