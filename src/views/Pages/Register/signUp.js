import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../actions/auth';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 
import { signUpRequest } from '../../../redux/authentications/action';
import { MainHeader } from '../../../containers/TheHeader';

const SignUp = props => {
    /**
     * * @useForm hooks
     */
    const { register, handleSubmit, errors, watch, formState } = useForm({
        mode: 'onChange'
    });

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const [passwordVisible, setPasswordVisible] = useState('password');

    if (isAuthenticated) {
        return <Redirect to='/onBoarding-one' />;
    }

    /*
     * Toggle Password Visibility
     *
     */
    const togglePasswordVisibility = e => {
        passwordVisible === 'password' ? setPasswordVisible('text') : setPasswordVisible('password');
    };

    /**
     *
     * @param {*} formData
     */
    const handleRegister = formData => {
        const { history } = props;
        const data = {
            meeter_fullname: formData.full_name,
            meeter_email: formData.email,
            meeter_password: formData.password,
            device_token: 'dasdkfjasdkf'
        };
        console.log(formData);
        dispatch(signUpRequest(data, history));
    };

    return (
        <>
            <MainHeader />
            <section className='free-sign-up mt-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-4 px-2'>
                            <div className='main-title pt-3 pb-4'>
                                <h1>Sign up for free</h1>
                            </div>
                            <form className='mb-4' onSubmit={handleSubmit(handleRegister)} autoComplete='off'>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputEmail1'>Email address</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='exampleInputEmail1'
                                        placeholder='Email address'
                                        aria-describedby='emailHelp'
                                        name='email'
                                        ref={register({
                                            required: {
                                                value: true,
                                                message: 'Please enter your email'
                                            },
                                            pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: 'Please enter your valid email '
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'Email must have at least 2 characters '
                                            },
                                            maxLength: {
                                                value: 320,
                                                message: 'Email max length 320 characters '
                                            }
                                        })}
                                    />
                                    {errors.email && <p className='customErrors'>{errors.email.message}</p>}
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputName'>Full name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='exampleInputName'
                                        placeholder='Full name'
                                        name='full_name'
                                        ref={register({
                                            required: {
                                                value: true,
                                                message: 'Please enter your full name'
                                            },
                                            pattern: {
                                                value: /(^[a-z?A-Z]{0,})([-']?[a-zA-Z]+)+( [a-zA-Z]([-']?[a-zA-Z]+)*)?$/,
                                                message:
                                                    'Please enter valid full name. Do not use numeric, special and double space.'
                                            },
                                            minLength: {
                                                value: 1,
                                                message: 'Name must have at least 1 characters'
                                            },
                                            maxLength: {
                                                value: 255,
                                                message: 'Name max length 255 characters'
                                            }
                                        })}
                                    />
                                    {errors.full_name && <p className='customErrors'>{errors.full_name.message}</p>}
                                </div>
                                <div className='form-group password-input'>
                                    <label htmlFor='exampleInputPassword1'>Password</label>
                                    <input
                                        type='password'
                                        id='passInput'
                                        className='form-control'
                                        id='exampleInputPassword1'
                                        placeholder='Password'
                                        name='password'
                                        type={passwordVisible}
                                        ref={register({
                                            // pattern: {
                                            //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/,
                                            //     message:
                                            //         '8 to 32 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
                                            // },
                                            required: {
                                                value: true,
                                                message: 'You must specify a password'
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'Password must have at least 8 characters'
                                            },
                                            maxLength: {
                                                value: 32,
                                                message: 'Password max length 32 characters'
                                            }
                                        })}
                                    />

                                    <span
                                        toggle='#input-pwd'
                                        onClick={togglePasswordVisibility}
                                        className={passwordVisible === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'}
                                        // className='fa fa-fw fa-eye field-icon toggle-password'
                                    ></span>
                                    {errors.password && <p className='customErrors'>{errors.password.message}</p>}
                                </div>
                                {/* <button type='submit' className='btn btn-primary w-100' disabled>
                                    Continue
                                </button> */}
                                <input type='submit' className='btn btn-primary w-100' value='Continue' />
                            </form>
                            <span className='have-account'>
                                I already have the account. <a href='#'>Log in</a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
