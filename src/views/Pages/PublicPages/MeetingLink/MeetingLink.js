import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import ThePublicHeader from '~/containers/PublicLayouts/PublicHeader';
// import { meetingRequest } from '~/redux/auth/actions';

function MeetingLink(props) {
    const dispatch = useDispatch();
    const {match : {params}} = props;
    console.log(params.slug);
    
    useEffect(()=>{
      //  dispatch(getMeeterData(params.slug));
        return true;
    },[]);
    const { register, handleSubmit } = useForm({
        mode: 'onChange'
    });
    const handleRegister = formData => {
        const { history } = props;
        const data = {
            "meeter_id" : '151',
            "requester_name": formData.full_name,
            "requester_email": formData.email,
            "summary": formData.summary,
            "device_token": 'dasdkfjasdkf'
        };
        console.log(data);
        dispatch(meetingRequest(data, history));
    };
    return (
        <>    
        <ThePublicHeader />
  
        <div className="meeterProfile">
          <div className="container">
            <div className="row">
              <div className="col-6 pl-0">
                <div className="personal-details py-5 boxShadowNon">
                  <div className="notifyPar w-100 py-3 small-size mt-3">
                    Enabling browser notifications for EasyMeet is mandatory to be able to use the app.
                    <a className="d-inline-block w-100 mt-2" href="#">How to enable</a>
                  </div>
                  <div className="media personal-details media-body text-center d-block mb-4">
                    <div className="text-center default-opacity m-auto avatar-container">
                      <img src="images/photo.png" alt="photo" />
                    </div>
                    <h2 className="requesterName mt-3 mb-1 mb-0">John Doe</h2>
                    <a className="edit-bio small-size" href="#">Founder of Herjavec Group | Shark on ABC's Shark Tank | Bestselling Author</a>
                    <span className="small-size d-block opacity-6 mt-1">Has been available <span>4</span> hours ago</span>
                  </div>
                  <div className="mb-4">
                    <span className="requesterMsg">John Doe</span> <span className="requesterMsg opacity-8">wants to meet with you when you're both free.</span>
                  </div>
                  <div>
                    <p className="small-size opacity-6 mb-0">Simply fill the information required and you'll get notified whenever John Doe is free to <br />
                      take a meeting.
                    </p>
                    <br />
                    <p className="small-size opacity-6">
                      If you're also free at that time, you can connect with 1-click, otherwise you just try again <br />
                      later. It's that simple.
                    </p>
                    <div className="MeeterProfileArrow">&#187;</div>
                  </div>
                  <div className="meeterProfileMsg px-2 py-3">
                    <h2 className="opacity-8">Use EasyMeet to host meetings yourself!</h2>
                    <span className="opacity-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>                    
                    <Link to={`/sign-up`}>
                         <button type="button" className="btn btn-primary medium-size">Sign up as a host</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-6 bg-white">
                <div className="meeterProfileSignUp text-left">
                  <div className="MeeterBrandContainer pb-4">
                    <a className="navbar-brand m-0 px-0 pt-0 pb-2 d-block" href="index.html">
                      <img src="images/EasyMeetBig.svg" alt="logo" />
                    </a>
                    <span className="Brandtext opacity-8">Never schedule a meeting again.</span>
                  </div>
                  <div className="MeeterLine"></div>
                  <div className="MeeterDetails pr-3">
                    <h3 className="mb-3">Some details before you meet:</h3>
                    <form className="mb-4" onSubmit={handleSubmit(handleRegister)}  autoComplete='off'>
                      <div className="form-group">
                        <label for="full_name">Your name</label>
                        <input type="text" 
                        className="form-control" 
                        name="full_name" 
                        placeholder="Enter your name" 
                        required 
                        ref={register({
                          required: {
                              value: true,
                              message: 'Please enter your name'
                          },
                          pattern: {
                              value: /(^[a-z?A-Z]{0,})([-']?[a-zA-Z]+)+( [a-zA-Z]([-']?[a-zA-Z]+)*)?$/,
                              message:
                                  'Please enter valid name. Do not use numeric, special and double space.'
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
                      </div>
                      <div className="form-group">
                        <label for="email">Your email</label>
                        <input type="email" 
                        className="form-control" 
                        name="email" 
                        placeholder="Enter your email address" 
                        aria-describedby="emailHelp" 
                        required 
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
                      </div>
                      <div className="form-group">
                        <label for="summary">Meeting summary</label>
                        <textarea 
                        className="form-control" 
                        name="summary" 
                        placeholder="What are you going to discuss?" 
                        rows="6"
                        ref={register({
                          required: {
                              value: true,
                              message: 'Please answer What are you going to discuss?'
                          }, 
                          minLength: {
                              value: 1,
                              message: 'Answer must have at least 1 characters'
                          }
                      })}
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary w-100" >Request a meeting</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};
 
export default MeetingLink;