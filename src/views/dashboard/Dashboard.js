import React from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch } from 'react-redux';
import { updateUserBio } from '../../redux/boarding/action';
import { updateProfilePicture } from '../../redux/boarding/action';
import { useSelector } from 'react-redux';
import Files from 'react-files';
import { useForm } from 'react-hook-form';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [copiedURL, setCopiedURL] = useState({ copied: false });
    const [editBio, setEditBio] = useState({ value: userInfo.meeter_bio, enable: false });
    const [typingTimeout, setTypingTimeout] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    
    const { handleSubmit } = useForm({
        mode: 'onChange'
    });
    const editBioClick = () => {
        setEditBio({ value: '', enable: true })
    };
    console.log(userInfo);
    const updateBio = (value) => {
        const data = {
            'meeter_bio': value
        };
        setTypingTimeout(
            setTimeout(() => {
                dispatch(updateUserBio(data))
                    .then(res => {
                        if (res.status == '203') {
                            console.log('Bio not updated');
                        } else {
                            // console.log("userInfo=>>>>>>>>>>>>>");
                            localStorage.removeItem('userInfo');
                            userInfo.meeter_bio = value;
                            // console.log(userInfo);
                            localStorage.setItem('userInfo', JSON.stringify(userInfo));
                        }
                    }
                    )
                    .catch(err => console.log(err));
            }, 2000)
        );
    };
    const onFilesChange = (files) => {
        const data = {
            'meeter_image' : files
        }
        dispatch(updateProfilePicture(data))
                    .then(res => {
                        if (res.status == '203') {
                            console.log('Bio not updated');
                        } else {
                            // console.log("userInfo=>>>>>>>>>>>>>");
                            localStorage.removeItem('userInfo');
                            userInfo.meeter_bio = value;
                            // console.log(userInfo);
                            localStorage.setItem('userInfo', JSON.stringify(userInfo));
                        }
                    }
                    )
                    .catch(err => console.log(err));
        console.log(files)
    };

    const onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    };
    const handleRegister = formData => { 
        const data = {
            meeter_image: formData.profile_pic,
            device_token: 'dasdkfjasdkf'
        };
        console.log(data);
        dispatch(updateProfilePicture(data));
    };
    return (
        <>
        
        <form className='mb-4' onSubmit={handleSubmit(handleRegister)}  enctype="multipart/form-data" autoComplete='off'>
            <input type="file" id='exampleInputName' name="profile_pic" /> 
            <input type='submit' className='btn btn-primary w-100' value='Upload' />
        </form>
            <div className="modal fade" id="avilabilityStatus1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title small-size align-self-center">Changing your Availability</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="MeeterLine mx-0"></div>
                        <div className="modal-body pb-0">
                            <div className="avilability ml-auto text-left">
                                <span className="small-size">Your Availability Status</span>
                                <div className="align-self-center row d-flex mx-0 my-2">
                                    <div className="button b2" id="button-10">
                                        <input id="modalAvilabilityChk" type="checkbox" className="checkbox w-100 h-100 p-0 m-0" />
                                        <div className="knobs small-size">
                                            <span className="small-size">Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-size text-left opacity-8 py-2">
                                When your status is set to ‘Available’, your Requestors and You will receive browser and email notifications in order to start your meetings.
                </div>
                            <div className="form-group mb-0 px-0 py-3">
                                <h5 className="small-size align-self-center text-left mb-2 pb-1">I am Available for the next:</h5>
                                <div className="radio">
                                    <input id="radio-1" name="radio" type="radio" />
                                    <label for="radio-1" className="radio-label small-size opacity-8">10 minutes</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-2" name="radio" type="radio" />
                                    <label for="radio-2" className="radio-label small-size opacity-8">30 minutes</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-3" name="radio" type="radio" />
                                    <label for="radio-3" className="radio-label small-size opacity-8">1 hour</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-4" name="radio" type="radio" />
                                    <label for="radio-4" className="radio-label small-size opacity-8">2 hours</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-5" name="radio" type="radio" />
                                    <label for="radio-5" className="radio-label small-size opacity-8">4 hours</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-6" name="radio" type="radio" />
                                    <label for="radio-6" className="radio-label small-size opacity-8">8 hours</label>
                                </div>
                            </div>
                            <div className="MeeterLine"></div>
                            <div className="form-group px-0 py-3 mb-0">
                                <div className="chkbox">
                                    <label>
                                        <input type="checkbox" name="checkbox" value="css" />
                                        <span className="small-size opacity-8">Open Meeting Room Window</span>
                                    </label>
                                </div>
                                <div className="chkbox">
                                    <label>
                                        <input type="checkbox" name="checkbox" value="css"   />
                                        <span className="small-size opacity-8">Send Notifications to all Requestors</span>
                                    </label>
                                </div>
                            </div>
                            <div className="MeeterLine"></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn discard p-0 m-0 mr-auto medium-size opacity-6" data-dismiss="modal">Discard changes</button>
                            <button type="button" className="btn btn-primary small-size m-0 update">Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="avilabilityStatus2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title small-size align-self-center">Changing your Availability</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="MeeterLine mx-0"></div>
                        <div className="modal-body pb-0">
                            <div className="avilability ml-auto text-left">
                                <span className="small-size">Your Availability Status</span>
                                <div className="align-self-center row d-flex mx-0 my-2">
                                    <div className="button b2" id="button-10">
                                        <input id="modalAvilabilityChk2" type="checkbox" className="checkbox w-100 h-100 p-0 m-0" checked="unchecked" />
                                        <div className="knobs small-size">
                                            <span className="small-size">Available</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="MeeterLine"></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn discard p-0 m-0 mr-auto medium-size opacity-6" data-dismiss="modal">Discard changes</button>
                                <button type="button" className="btn btn-primary small-size m-0 update">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="files">
            </div>
            <section className="personal-details bg-white pb-4">
                <div className="container">
                    <div className="row">
                        <div className="notifyPar w-100 mb-4 py-3 small-size">
                            Enabling browser notifications for EasyMeet is mandatory to be able to use the app. <a className="ml-4" href="#">How to enable</a>
                        </div>
                        <div className="media text-left">
                            <Files
                                className='files-dropzone'
                                onChange={onFilesChange}
                                onError={onFilesError}
                                accepts={['image/png', 'image/jpg']}
                                maxFileSize={10000000}
                                minFileSize={0}
                                clickable
                            >
                                <div className="align-self-center text-center mr-3 pt-4 avatar-container">
                                    <img className="mb-1" src="assets/images/camera.png" alt="camera" />
                                    <br />
                                    <span>Add photo</span>

                                </div>
                            </Files>
                            <div className="media-body align-self-center">
                                <h2 className="mt-0">{userInfo.meeter_fullname}</h2>
                                {editBio.enable == true && <input type="text" className="form-control small-size" placeholder={"Update Bio"} onChange={e => updateBio(e.target.value)} />}
                                <a className="edit-bio small-size" onClick={editBioClick} href="#">{editBio.value}
                                    <i onClick={editBioClick} className="fa fa-pencil" aria-hidden="true"></i></a>
                                <br />
                                <span className="url-room small-size"  >easymeet.io/{userInfo.meeter_meet_slug}

                                    <CopyToClipboard text={"easymeet.io/" + userInfo.meeter_meet_slug}
                                        onCopy={() => setCopiedURL({ copied: true })}>
                                        <i className="fa fa-clone" aria-hidden="true"></i>
                                    </CopyToClipboard>
                                </span>{copiedURL.copied == true && <span style={{ color: 'red' }}>Copied.</span>}
                            </div>
                            <div className="avilability ml-auto text-right">
                                <span className="small-size">My Availability:</span>
                                <div className="align-self-center row d-flex mx-0 mt-2">
                                    <div className="meeting-room d-none">
                                        <button className="btn btn-default meeting-btn small-size"><i className="fa fa-camera" aria-hidden="true"></i> Meeting Room</button>
                                    </div>
                                    <div className="button b2" id="button-10">
                                        <input type="checkbox" className="checkbox w-100 h-100 p-0 m-0" />
                                        <div className="knobs small-size">
                                            <span className="small-size">Available</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="search mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6 px-0">
                            <div className="row">
                                <span className="col-3 align-self-center small-size text-left pr-0"><span>0</span> Pending Requests</span>
                                <div className="form-group has-search col-6 mb-0 px-0 py-0">
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <input type="text" className="form-control small-size" placeholder="Search by name or email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mr-auto bulk-action text-right pr-0">
                            <span className="col-3 align-self-center small-size text-left pr-0">Bulk Actions:</span>
                            <button className="btn default-btn small-size bg-white notify ml-3" disabled><i className="fa fa-bell-o mr-1" aria-hidden="true"></i>Notify All</button>
                            <button className="btn default-btn small-size bg-white reject" disabled><i className="fa fa-times mr-1" aria-hidden="true"></i>Reject All</button>
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
                                        <span className="url-room small-size" className="mb-0">codyfisher@mail.com</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="bulk-action text-right pr-0">
                                        <button className="btn default-btn small-size bg-white notify ml-3"><i className="fa fa-bell-o mr-1" aria-hidden="true"></i>Notify All</button>
                                        <button className="btn default-btn small-size bg-white reject"><i className="fa fa-times mr-1" aria-hidden="true"></i>Reject All</button>
                                    </div>
                                </div>
                            </div>
                            <div className="request-summary text-left col-9 pr-0 mt-3">
                                <h3 className="small-size mb-0">Request Summary:</h3>
                                <span className="small-size" style={{opacity: 0.6}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat. Vitae suscipit tellus mauris a. Cursus metus aliquam eleifend mi in nulla posuerenecta. </span>
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
                                        <span className="url-room small-size" className="mb-0">codyfisher@mail.com</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="bulk-action text-right pr-0">
                                        <button className="btn default-btn small-size bg-white notify ml-3"><i className="fa fa-bell-o mr-1" aria-hidden="true"></i>Notify All</button>
                                        <button className="btn default-btn small-size bg-white reject"><i className="fa fa-times mr-1" aria-hidden="true"></i>Reject All</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="meeting-requists">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 px-2">
                            <div className="createURL mb-3">
                                <div className="empty-icon m-auto text-center">
                                    Empty Icon
                        </div>
                                <h3 className="my-3 medium-size">You have no meeting requests yet.</h3>
                                <p className="mb-4">Make sure to share your link with the people you want to meet online.</p>
                            </div>
                            <div className="createdURL text-center mb-2">
                                easymeet.io/{userInfo.meeter_meet_slug}
                            </div>
                            <div className="row icons mb-4">
                                <div className="col mx-2 px-0"><a className="px-1 py-2" href="#"><img className="pr-1" src="assets/images/Copy.png" alt="Copy" /> <span>Copy</span>  </a></div>
                                <div className="col mx-2 px-0"><a className="px-1 py-2" href="#"><img className="pr-1" src="assets/images/facebook.png" alt="Facebook" /><span>Facebook</span>  </a></div>
                                <div className="col mx-2 px-0"><a className="px-1 py-2" href="#"><img className="pr-1" src="assets/images/twitter.png" alt="Twitter" /> <span>Twitter</span>  </a></div>
                                <div className="col mx-2 px-0"><a className="px-1 py-2" href="#"><img className="pr-1" src="assets/images/linkedin.png" alt="LinkedIn" /> <span>LinkedIn</span>  </a></div>
                                <div className="col mx-2 px-0"><a className="px-1 py-2" href="#"><img className="pr-1" src="assets/images/Envelope.png" alt="Email" /> <span>Email</span>  </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
