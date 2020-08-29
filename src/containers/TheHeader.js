import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../actions/types';

const TheHeader = () => {
    const dispatch = useDispatch();
    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-white pt-4 pb-4'>
                <div className='container'>
                    <a className='navbar-brand' href='index.html'>
                        EasyMeat
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <button
                                    type='button'
                                    className='btn btn-primary'
                                    onClick={e => dispatch({ type: LOGOUT, payload: '' })}>
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default TheHeader;

export const MainHeader = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-white pt-4 pb-4'>
                <div className='container'>
                    <a className='navbar-brand' href='index.html'>
                        EasyMeat
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item active'>
                            <Link to={`/login`}>
                                Login
                            </Link> 
                            </li>
                            <li className='nav-item'>
                                <Link to={`/sign-up`}>
                                    <button type='button' className='btn btn-primary'>
                                        Sign Up
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
