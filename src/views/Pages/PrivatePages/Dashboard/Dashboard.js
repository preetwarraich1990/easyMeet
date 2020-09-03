import React, { Fragment } from 'react';
// import { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { updateUserBio } from '~/redux/boarding/action';
// import { updateProfilePicture } from '~/redux/boarding/action';
// import { updateAvailability } from '~/redux/boarding/action';
// import { useSelector } from 'react-redux';
// import Files from 'react-files';
// import { useForm } from 'react-hook-form';
import UserInfo from './UserInfo/UserInfo';
import MeetingList from './MeetingList/MeetingList';

const Dashboard = () => {
    // const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    // const [copiedURL, setCopiedURL] = useState({ copied: false });
    // const [typingTimeout, setTypingTimeout] = useState(true);
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.auth.user);


    // const { handleSubmit } = useForm({
    //     mode: 'onChange'
    // });


    // const onFilesError = (error, file) => {
    //     console.log('error code ' + error.code + ': ' + error.message)
    // };

    // const handleRegister = formData => {
    //     const data = {
    //         meeter_image: formData.profile_pic,
    //         device_token: 'dasdkfjasdkf'
    //     };

    //     dispatch(updateProfilePicture(data));
    // };



    return (
        <Fragment>
            <UserInfo /> 
            <MeetingList />
        </Fragment>
    );
};

export default Dashboard;
