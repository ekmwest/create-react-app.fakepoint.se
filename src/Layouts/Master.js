import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './Master.css'

function Master({ children }) {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="main">
                <Header></Header>
                <div className="main__content">
                    {children}
                </div>
            </div>
        </>
    )
};

export default Master;


