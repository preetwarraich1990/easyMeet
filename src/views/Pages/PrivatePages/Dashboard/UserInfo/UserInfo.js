import React, { useEffect, useFetch } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserBio } from '~/redux/boarding/action';
import { Button, Header, Checkbox, Modal } from 'semantic-ui-react';
import { updateAvailability } from '~/redux/boarding/action';
import { checkAvailability } from '~/redux/boarding/action';
import Dropzone from 'react-dropzone';


function UserInfo() {
    const dispatch = useDispatch();
    const [openImagePopUp, setOpenImagePopUp] = React.useState(false);
    const [openBioPopUp, setOpenBioPopUp] = React.useState(false);
    const [openAvailability, setOpenAvailability] = React.useState(false);
    const [switchAvailability, setSwitchAvailability] = React.useState(true);
    const [availabilityDuration, setAvailabilityDuration] = React.useState({ value: '30 minutes' });
    const userInfo = useSelector(state => state.auth.user);


    useEffect(() => {
        dispatch(checkAvailability(userInfo.id));
    }, [])


    const [editBio, setEditBio] = useState({ value: userInfo.meeter_bio });
    const openAvailabilityPopup = (value) => {
        if (value == false) {
            setOpenAvailability(true);
        } else {
            setOpenAvailability(false);
            const data = {
                "meeter_availibility": "no"
            }
            console.log(data);
            dispatch(updateAvailability(data));
        }
    }
    const changeAvailability = () => {
        console.log(availabilityDuration);
        if (openAvailability == true) {
            const data = {
                "meeter_availibility": "yes",
                "time_duration": availabilityDuration.value
            };
            console.log(data);
            dispatch(updateAvailability(data));
        } else {
            const data = {
                "meeter_availibility": "no"
            }
            console.log(data);
            dispatch(updateAvailability(data));
        }
        setOpenAvailability(false);
    }
    const updateBio = () => {
        const data = {
            'meeter_bio': editBio.value
        };
        dispatch(updateUserBio(data));
        setOpenBioPopUp(false);
    };
    const handleBioChange = (event) => {
        setEditBio({ value: event.target.value });
    };
    const switchAvailabitly = (e) => {
        console.log(e);
        if (e == false) {
            setSwitchAvailability(true);
        } else {
            setSwitchAvailability(false);
        }
    };
    const changeAvailabilityDuration = (value) => {
        setAvailabilityDuration({ value: value });
    };
    const uploadProfileImage = (image) => {
        const data = {
            meeter_id: meeter_data.id,
            requester_name: formData.full_name,
            requester_email: formData.email,
            summary: formData.summary,
            device_token: 'dasdkfjasdkf'
        };
        setOpenImagePopUp(false);
    };
    return (
        <>
            <section className="personal-details bg-white pb-4">
                <div className="container">
                    <div className="row">
                        <div className="media text-left">
                            <div className="align-self-center text-center mr-3 default-opacity avatar-container">
                                <Modal
                                    size='small'
                                    onClose={() => setOpenImagePopUp(false)}
                                    onOpen={() => setOpenImagePopUp(true)}
                                    open={openImagePopUp}
                                    trigger={<img id="openDrag" className="mb-1" src="../../../../assets/images/photo.png" alt="photo" />}
                                >
                                    <Modal.Header>Select a Photo</Modal.Header>
                                    <Modal.Content image>
                                        <Modal.Description>
                                            <Header>Upload your photo </Header>
                                            <Dropzone onDrop={acceptedFiles => uploadProfileImage(acceptedFiles)}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <section>
                                                        <div {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                                        </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button className="btn discard p-0 m-0 mr-auto medium-size opacity-6" onClick={() => uploadProfileImage()}>
                                            Discard
                            </Button>
                                        <Button
                                            content="Update"
                                            className="btn primary-btn ml-auto medium-size updatePhoto"
                                            aria-hidden="true"
                                            onClick={() => setOpenImagePopUp(false)}
                                            positive
                                        />
                                    </Modal.Actions>
                                </Modal>
                            </div>
                            <div className="media-body align-self-center">
                                <h2 className="mt-0"> {userInfo.meeter_fullname}</h2>
                                <Modal
                                    size='small'
                                    onClose={() => setOpenBioPopUp(false)}
                                    onOpen={() => setOpenBioPopUp(true)}
                                    open={openBioPopUp}
                                    trigger={<p style={{ pointer: 'cursor' }} className="edit-bio small-size" href="#">{userInfo.meeter_bio}</p>}
                                >
                                    <Modal.Header>Update your bio</Modal.Header>
                                    <Modal.Content>
                                        <Modal.Description>
                                            <input className="form-control small-size" type="text" value={editBio.value} onChange={e => handleBioChange(e)} />
                                        </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button className='btn discard p-0 m-0 mr-auto medium-size opacity-6' onClick={() => setOpenBioPopUp(false)}>
                                            Discard
                                </Button>
                                        <Button
                                            content="Update Bio"
                                            className="btn btn-primary small-size m-0 update"
                                            onClick={updateBio}

                                        />
                                    </Modal.Actions>
                                </Modal>
                                <span className="url-room small-size">easymeet.io/{userInfo.meeter_meet_slug} <i onClick={() => { navigator.clipboard.writeText('easymeet.io/' + userInfo.meeter_meet_slug) }} className="fa fa-clone" aria-hidden="true" /></span>
                            </div>
                        </div>
                        <div className="avilability ml-auto text-right">
                            <span className="small-size">My Availability:</span>
                            <div className="align-self-center row d-flex mx-0 my-2">
                                <div className="meeting-room align-self-center mr-3">
                                    <button className="btn btn-default meeting-btn bg-white small-size"><i
                                        className="fa fa-camera" aria-hidden="true" /> Meeting Room
                                </button>
                                </div>
                                <Modal
                                    size='small'
                                    onClose={() => setOpenAvailability(false)}
                                    onOpen={() => setOpenAvailability(true)}
                                    open={openAvailability}
                                >
                                    <Modal.Header>Changing your Availability</Modal.Header>
                                    <Modal.Content>
                                        <Modal.Description>

                                            <div className="MeeterLine mx-0"></div>
                                            <div className="modal-body pb-0">
                                                <div className="avilability ml-auto text-left">
                                                    <span className="small-size">Your Availability Status</span>
                                                    <div className="align-self-center row d-flex mx-0 my-2">
                                                        <div className="button b2" id="button-10">
                                                            <input id="modalAvilabilityChk" onChange={e => switchAvailabitly(e.target.checked)} type="checkbox" className="checkbox w-100 h-100 p-0 m-0" />
                                                            <div className="knobs small-size">
                                                                <span className="small-size">Available</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {switchAvailability == true && <div>
                                                    <div className="small-size text-left opacity-8 py-2">
                                                        When your status is set to ‘Available’, your Requestors and You will receive browser and email notifications in order to start your meetings.
                                                </div>
                                                    <div className="form-group mb-0 px-0 py-3">
                                                        <h5 className="small-size align-self-center text-left mb-2 pb-1">I am Available for the next:</h5>
                                                        <div className="radio">
                                                            <input
                                                                id="radio-1"
                                                                name="radio"
                                                                type="radio"
                                                                value="10 minutes"
                                                                onChange={e => changeAvailabilityDuration(e.target.value)}
                                                            />
                                                            <label for="radio-1" className="radio-label small-size opacity-8">10 minutes</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input
                                                                id="radio-2"
                                                                name="radio"
                                                                type="radio"
                                                                value="30 minutes"
                                                                onChange={e => changeAvailabilityDuration(e.target.value)}
                                                            />
                                                            <label for="radio-2" className="radio-label small-size opacity-8">30 minutes</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="radio-3"
                                                                name="radio"
                                                                type="radio"
                                                                value="1 hour"
                                                                onChange={e => changeAvailabilityDuration(e.target.value)}
                                                            />
                                                            <label for="radio-3" className="radio-label small-size opacity-8">1 hour</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="radio-4"
                                                                name="radio"
                                                                type="radio"
                                                                value="2 hours"
                                                                onChange={e => changeAvailabilityDuration(e.target.value)}
                                                            />
                                                            <label for="radio-4" className="radio-label small-size opacity-8">2 hours</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="radio-5"
                                                                name="radio"
                                                                type="radio"
                                                                value="4 hours"
                                                                onChange={e => changeAvailabilityDuration(e.target.value)}
                                                            />
                                                            <label for="radio-5" className="radio-label small-size opacity-8">4 hours</label>
                                                        </div>
                                                        <div className="radio">
                                                            <input id="radio-6"
                                                                name="radio"
                                                                type="radio"
                                                                value="8 hours"
                                                                onChange={e => changeAvailabilityDuration(e.target.value)}
                                                            />
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
                                                                <input type="checkbox" name="checkbox" value="css" checked />
                                                                <span className="small-size opacity-8">Send Notifications to all Requestors</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="MeeterLine"></div>
                                                </div>}
                                            </div>
                                        </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button className='btn discard p-0 m-0 mr-auto medium-size opacity-6' onClick={() => setOpenAvailability(false)}>
                                            Discard
                                    </Button>
                                        <Button
                                            content="Update"
                                            className="btn primary-btn ml-auto medium-size updatePhoto"
                                            onClick={changeAvailability}
                                            positive
                                        />
                                    </Modal.Actions>
                                </Modal>
                                <div className="button b2" id="button-10">
                                    <input type="checkbox" value='No' onChange={e => openAvailabilityPopup(e.target.checked)} className="checkbox w-100 h-100 p-0 m-0" />
                                    <div className="knobs small-size">
                                        <span className="small-size">Available</span>
                                    </div>
                                </div>
                            </div>
                            <span
                                className="small-size extend">Available for <span>7</span> hours <span>59</span> minutes. <a
                                    href="#">Extend ⯆</a></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserInfo