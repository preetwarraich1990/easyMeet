import React from 'react';

const Dashboard = () => {
    const logout = () => {
        localStorage.removeItem('auth');
        window.location.reload();
    };
    return (
        <div className='content'>
            <h1>I am dashboard</h1>
            <a href='#' onClick={logout}>
                Logout
            </a>
        </div>
    );
};

export default Dashboard;
