import React from 'react';
import Header from '../Components/Header/Header';
import styles from './TestPage.module.css';

function TestPage() {
    return (
        <>
            <Header title="Test"></Header>
            <div className={styles.content}>
                <h1>Test</h1>
                <p>{process.env.REACT_APP_API_URL}</p>
            </div>
        </>
    );
}

export default TestPage;
