import React from 'react';
import Header from '../Components/Header/Header';
import styles from './TestPage.module.css';
// import config from '../Code/config';

function TestPage() {
    return (
        <>
            <Header title="Test"></Header>
            <div className={styles.content}>
                <p>
                    <input type="submit" value="⯆" />
                </p>
                <h1>Normal input</h1>
                <p>
                    <input type="text" />
                </p>
                <br />
                <p>autocapitalize="off"</p>
                <p>
                <input type="text" autocapitalize="off" />
                </p>
            </div>
        </>
    );
}

export default TestPage;
