import React from 'react';
import Sidebar from '../Components/Sidebar';

function Master({ children }) {
    return (
        <div>
            <Sidebar></Sidebar>
            {children}
        </div>
    );
}

export default Master;


