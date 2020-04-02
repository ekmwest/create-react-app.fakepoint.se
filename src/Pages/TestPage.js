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
                    <span>⯆ Not displayed correct in Safari</span>
                </p>
                <p>
                    <span>⯅ Not displayed correct in Safari</span>
                </p>
                <p>
                    <span>▼ OK</span>
                </p>
                <p>
                    <span>▲ OK</span>
                </p>
                <p>
                    <span>&#9660; OK</span>
                </p>
            </div>
        </>
    );
}

export default TestPage;
