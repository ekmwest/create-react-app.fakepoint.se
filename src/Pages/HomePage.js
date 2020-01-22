import React from 'react';
import Header from '../Components/Header/Header';
import styles from './HomePage.module.css';
import Posts from '../Components/Posts/Posts';

function HomePage() {
    return (
        <>
            <Header title="Home"></Header>
            <div className={styles.content}>
                <Posts></Posts>
            </div>
        </>
    );
}

export default HomePage;
