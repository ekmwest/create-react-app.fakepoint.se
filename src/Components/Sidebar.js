import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/course/7/news">LIA kurs</Link>
            </li>
        </ul>
    );
}

export default Sidebar;


