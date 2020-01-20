import React from 'react';
import Sidebar from '../Components/Sidebar';
import './Master.css'

function Master({ children }) {
    return (
        <div className="main">
            <Sidebar></Sidebar>
            <div className="main__content">
                {children}
            </div>
        </div>
    );
}

export default Master;


