import React from 'react'

function UserInfo() {

    const changeAvailability = (value) => {
        if(value == true){
            const data = {
                "meeter_availibility": "yes",
                "time_duration": "30 minutes"
            };
            // dispatch(updateAvailability(data));
        } else {
            const data = {
                "meeter_availibility": "no"
            }
            // dispatch(updateAvailability(data));
        }
    }

    return (
        <section className="personal-details bg-white pb-4">
            <div className="container">
                <div className="row">
                    <div className="media text-left">
                        <div className="align-self-center text-center mr-3 default-opacity avatar-container">
                            <img className="mb-1" src="../../../../assets/images/photo.png" alt="photo"/>
                        </div>
                        <div className="media-body align-self-center">
                            <h2 className="mt-0">John Doe</h2>
                            <a className="edit-bio small-size" href="#">Founder of Herjavec Group | Shark on ABC's
                                Shark Tank | Bestselling Authors</a>
                            <br/>
                            <span className="url-room small-size">easymeet.io/johndoe-2 <i className="fa fa-clone"
                                                                                           aria-hidden="true"/></span>
                        </div>
                    </div>
                    <div className="avilability ml-auto text-right">
                        <span className="small-size">My Availability:</span>
                        <div className="align-self-center row d-flex mx-0 my-2">
                            <div className="meeting-room align-self-center mr-3">
                                <button className="btn btn-default meeting-btn bg-white small-size"><i
                                    className="fa fa-camera" aria-hidden="true"/> Meeting Room
                                </button>
                            </div>
                            <div className="button b2" id="button-10">
                                <input type="checkbox" className="checkbox w-100 h-100 p-0 m-0"/>
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
    )
}

export default UserInfo