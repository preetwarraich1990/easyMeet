import { Link } from 'react-router-dom';
import React from 'react';
import { logout } from '../../redux/auth/actions';
import { useDispatch } from 'react-redux';

function ThePrivateHeader () {
    const dispatch = useDispatch()
    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-white pt-4 pb-4'>
                <div className='container'>
                    <Link className='navbar-brand' href='index.html' to={`/`}>
                        EasyMeat
                    </Link>
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to={`/dashboard`}>
                                    Dasboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/settings`}>
                                    Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" onClick={() => dispatch(logout())}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default ThePrivateHeader