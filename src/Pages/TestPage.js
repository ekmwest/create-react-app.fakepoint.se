import React from 'react';
import Header from '../Components/Header/Header';
import styles from './TestPage.module.css';
import config from '../Code/config';

function TestPage() {
    return (
        <>
            <Header title="Test"></Header>
            <div className={styles.content}>
                <h1>Test</h1>
                <p>{config.apiUrl}/HEJ</p>
            </div>
        </>
    );
}

export default TestPage;
