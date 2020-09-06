import React, { Fragment } from 'react';
import { notifyAll } from '~/redux/boarding/action';
import { accessFromObject } from '../../../../../../utils/accessFromObject'; 
import { accessFromArray } from '../../../../../../utils/accessFromArray';
import { useState } from 'react';


const onClickNotify = (value) => {
    const data = {
        "status_category":"single",
        "status_type":"accept",
        "requester_id": value
    }; 
    dispatch(notifyAll(data));
};
const onClickReject = (value) => {
    const data = {
        "status_category":"single",
        "status_type":"reject",
        "requester_id": value
    }; 
    dispatch(notifyAll(data));
};
const onClickNotifyAll = () => {
    const data = {
        "status_category":"multiple",
        "status_type":"accept"
    };
    dispatch(notifyAll(data));
};
const onClickRejectAll = () => {
    const data = {
        "status_category":"multiple",
        "status_type":"reject"
    };
    dispatch(notifyAll(data));
};

const MeeterList = (props) => {
    const { data } = props;
    const total_req = accessFromObject(data, 'total_pending');
    const meetings = accessFromArray(data, 'mettings');
    // const [meetingArr, setmeetingArray] = useState();
    
    // if((Array.isArray(meetings))){
    //     const setMeetingArr = meetings;
    //     meetings.map((item) =>
    //         console.log(item)
    //         );
    // }
    // meetings.map(function(name, index){
    //     console.log(index + "++++++" + name);
    // });
    // console.log(data);
    return (
        <>
        <section className="search mt-2">
        <div className="container">
            <div className="row">
                <div className="col-6 px-0">
                    <div className="row">
                        <span className="col-3 align-self-center small-size text-left pr-0"><span>{total_req}</span> {total_req > 1 ? 'Pending Requests':'Pending Request'}</span>
                        <div className="form-group has-search col-6 mb-0 px-0 py-0">
                            <span className="fa fa-search form-control-feedback" />
                            <input type="text" className="form-control small-size"
                                placeholder="Search by name or email" />
                        </div>
                    </div>
                </div>
                <div className="col-6 mr-auto bulk-action text-right pr-0">
                    <span className="col-3 align-self-center small-size text-left pr-0">Bulk Actions:</span>
                    <div className="notifyBtnContainer d-inline-block">
                        <button 
                        id="notifyAll" 
                        className="btn default-btn small-size bg-white notify ml-3"
                        onClick={onClickNotifyAll}
                         >
                            <i className="fa fa-bell-o mr-1" aria-hidden="true" />
                        Notify All
                    </button>
                        <span id="notifyPopup"
                            className="popuptext bg-white small-size text-left default-opacity">
                            We just notified all your requestors.
        <br />
        Notifications are not available for the next 10 minutes in order to prevent spam
        <br />
                            <span id="dismiss" className="text-right small-size blue d-inline-block w-100 mt-1">Dismiss</span>
                        </span>
                    </div>
                    <button 
                    className="btn default-btn small-size bg-white reject"
                    onClick={onClickRejectAll}
                    ><i className="fa fa-times mr-1" aria-hidden="true" />Reject All
                </button>
                </div>
            </div>
        </div>
    </section>
    <section className="requests-list personal-details pb-5">
        <div className="container">
            <div className="row">
                {Array.isArray(meetings) === true ?  meetings.map( (requester, index) => (
                        <div key={index} className="requster-container bg-white w-100 mt-3">
                            <div className="row mx-0">
                                <div className="media text-left mr-auto">
                                    <div className="align-self-start text-center mr-3 avatar-container bg-white medium-size">
                                        <span>{requester.requester_name} </span>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <h2 className="my-0 requesterName">{requester.requester_name}</h2>
                                        <span className="url-room small-size">{requester.requester_email}</span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="bulk-action text-right pr-0">
                                        <button className="btn default-btn small-size bg-white notify ml-3" value={requester.requester_id} onClick={e=>onClickNotify(e.target.value)}><i className="fa fa-bell-o mr-1" aria-hidden="true" />Notify All</button>
                                        <button className="btn default-btn small-size bg-white reject" value={requester.requester_id} onClick={e=>onClickReject(e.target.value)}><i className="fa fa-times mr-1" aria-hidden="true" />Reject All</button>
                                    </div>
                                </div>
                            </div>
                            <div className="request-summary text-left col-9 pr-0 mt-3">
                                <h3 className="small-size mb-0">Request Summary:</h3>
                                <span className="small-size" style={{ opacity: '0.6' }}>{requester.summary}</span>
                            </div>
                        </div> 
                    )) : 'No Meetings Found'} 
            </div>
        </div>
    </section>
    </>
    );

}

export default MeeterList;