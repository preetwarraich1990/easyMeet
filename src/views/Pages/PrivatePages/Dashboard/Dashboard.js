import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { updateUserBio } from '~/redux/boarding/action';
import { updateProfilePicture } from '~/redux/boarding/action';
import { updateAvailability } from '~/redux/boarding/action';
import { checkAvailability } from '~/redux/boarding/action';
import { useSelector } from 'react-redux';
import Files from 'react-files';
import { useForm } from 'react-hook-form';
import UserInfo from './UserInfo/UserInfo';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [copiedURL, setCopiedURL] = useState({ copied: false });
    const [typingTimeout, setTypingTimeout] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(checkAvailability(userInfo.id))
    }, [])
    
    const { handleSubmit } = useForm({
        mode: 'onChange'
    });


    const onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    };

    const handleRegister = formData => { 
        const data = {
            meeter_image: formData.profile_pic,
            device_token: 'dasdkfjasdkf'
        };

        dispatch(updateProfilePicture(data));
    };



    return (
        <Fragment>
            <UserInfo />

            <section className="search mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6 px-0">
                            <div className="row">
                                <span className="col-3 align-self-center small-size text-left pr-0"><span>6</span> Pending Requests</span>
                                <div className="form-group has-search col-6 mb-0 px-0 py-0">
                                    <span className="fa fa-search form-control-feedback"/>
                                    <input type="text" className="form-control small-size"
                                           placeholder="Search by name or email"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mr-auto bulk-action text-right pr-0">
                            <span className="col-3 align-self-center small-size text-left pr-0">Bulk Actions:</span>
                            <div className="notifyBtnContainer d-inline-block">
                                <button id="notifyAll" className="btn default-btn small-size bg-white notify ml-3" >
                                    <i className="fa fa-bell-o mr-1" aria-hidden="true"/>
                                    Notify All
                                </button>
                                <span id="notifyPopup"
                                      className="popuptext bg-white small-size text-left default-opacity">
                    We just notified all your requestors.
                    <br/>
                    Notifications are not available for the next 10 minutes in order to prevent spam
                    <br/>
                    <span id="dismiss" className="text-right small-size blue d-inline-block w-100 mt-1">Dismiss</span>
                  </span>
                            </div>
                            <button className="btn default-btn small-size bg-white reject"><i
                                className="fa fa-times mr-1" aria-hidden="true"/>Reject All
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="requests-list personal-details pb-5">
                <div className="container">
                    <div className="row">
                        <div className="requster-container bg-white w-100 mt-3">
                            <div className="row mx-0">
                                <div className="media text-left mr-auto">
                                    <div className="align-self-start text-center mr-3 avatar-container bg-white medium-size">
                                        <span>CF</span>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h2 className="my-0 requesterName">Cody Fisher</h2>
                                        <span className="url-room small-size">codyfisher@mail.com</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="bulk-action text-right pr-0">
                                        <button className="btn default-btn small-size bg-white notify ml-3"><i className="fa fa-bell-o mr-1" aria-hidden="true" />Notify All</button>
                                        <button className="btn default-btn small-size bg-white reject"><i className="fa fa-times mr-1" aria-hidden="true" />Reject All</button>
                                    </div>
                                </div>
                            </div>
                            <div className="request-summary text-left col-9 pr-0 mt-3">
                                <h3 className="small-size mb-0">Request Summary:</h3>
                                <span className="small-size" style={{opacity: '0.6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat. Vitae suscipit tellus mauris a. Cursus metus aliquam eleifend mi in nulla posuerenecta. </span>
                            </div>
                        </div>
                        <div className="requster-container bg-white w-100 mt-3">
                            <div className="row mx-0">
                                <div className="media text-left mr-auto">
                                    <div className="align-self-start text-center mr-3 avatar-container bg-white medium-size">
                                        <span>JC</span>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h2 className="my-0 requesterName">Cody Fisher</h2>
                                        <span className="url-room small-size">codyfisher@mail.com</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="bulk-action text-right pr-0">
                                        <button className="btn default-btn small-size bg-white notify ml-3"><i className="fa fa-bell-o mr-1" aria-hidden="true" />Notify All</button>
                                        <button className="btn default-btn small-size bg-white reject"><i className="fa fa-times mr-1" aria-hidden="true" />Reject All</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Dashboard;
