import React from 'react';
import Header from '../Components/Header/Header';
import styles from './TestPage.module.css';
// import config from '../Code/config';

function TestPage() {
    return (
        <>
            <Header title="Test"></Header>
            <div className={styles.content}>
                <h1>Test</h1>
                <p>accept = image/*</p>
                <p>
                    <input type="file" accept="image/*" />
                </p>
                <br />
                <p>accept = image/png, image/jpeg, image/gif</p>
                <p>
                    <input type="file" accept="image/png, image/jpeg, image/gif" />
                </p>
            </div>
        </>
    );
}

export default TestPage;
