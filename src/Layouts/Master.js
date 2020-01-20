import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';

function Master({ children }) {
    return (
        <>
            <Sidebar></Sidebar>
            <Header></Header>
            <div class="main">
                {children}
            </div>
        </>
    );
}

export default Master;


