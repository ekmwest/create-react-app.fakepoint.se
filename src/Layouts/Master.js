import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './Master.css'

function Master({ children }) {
    return (
        <div className="main">
            <Sidebar></Sidebar>
            <Header></Header>
            <div className="main__content">
                {children}
            </div>
        </div>
    )
};

export default Master;


