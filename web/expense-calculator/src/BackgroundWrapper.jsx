import React from 'react';
import { useLocation } from 'react-router-dom';
import './background.css'; // Import specific background styles

export default function BackgroundWrapper ({children}) {
    const location = useLocation();
    const isLoginPage = location.pathname == '/';

    return (
        <div className= {isLoginPage ? 'background-img' : ''}>
            {children}
        </div>
    )
}