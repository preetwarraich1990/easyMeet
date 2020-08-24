import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../actions/auth';
import { Redirect } from 'react-router-dom';
import { MainHeader } from '../../../containers/TheHeader';

const Login = props => {
    const [email, setEmail] = useState('demo@gmail.com');
    const [password, setPassword] = useState('demo');

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    function login(e) {
        localStorage.setItem('auth', true);
        window.location.reload();
        // dispatch(loginUser(email, password));
    }

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <>
            <MainHeader />
            <div className='container-fluid '>
                <div className='min-vh-100 flex-column d-flex align-items-center justify-content-center'>
                    <div className='signinbox bg-white'>
                        <div className='signin-header text-center'>
                            <h2 className='widget-title mb-3'>Sign in</h2>
                            <p>Please enter email and password to login</p>
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='form-control'
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <div className='input-group' id='show_hide_password'>
                                <input
                                    placeholder='password'
                                    type='password'
                                    className='form-control'
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                <div className='input-group-append'>
                                    <a href='' className='input-group-text'>
                                        <i className='fa fa-eye-slash' aria-hidden='true'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <button
                                className='btn btn-block btn-primary'
                                //  style={{ color: 'white', backgroundColor: '#00B3B6', borderColor: '#00B3B6' }}
                                type='submit'
                                onClick={login}>
                                <strong>Login</strong>
                            </button>
                        </div>
                        <div className='text-center'>
                            <a href='#' className='text-dark'>
                                Forget your password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
