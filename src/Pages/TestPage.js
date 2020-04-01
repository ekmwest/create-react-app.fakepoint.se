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
                    <input className="unicode-char" type="submit" value="⯆" />
                </p>
                <p>
                    <button className="unicode-char" type="submit">⯆</button>
                </p>
                <p>
                    <span className="unicode-char">Hej ⯆</span>
                </p>
                <p>
                    <span>ß</span>
                </p>
                <p>
                    <span>▼</span>
                </p>
                <p>
                    <span>&#9660;</span>
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
