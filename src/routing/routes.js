import React from 'react';

const Dashboard = React.lazy(() => import('~/views/dashboard/Dashboard'));
const StepOne = React.lazy(() => import('~/views/Pages/onBoardingSteps/stepOne'));
const StepTwo = React.lazy(() => import('~/views/Pages/onBoardingSteps/stepTwo'));
const StepThree = React.lazy(() => import('~/views/Pages/onBoardingSteps/stepThree'));
const MeetRequest = React.lazy(() => import('~/views/Pages/Meeting/meetRequest'));

const routes = [
    { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/onBoarding-one', name: 'Dashboard', component: StepOne }, 
    { path: '/onBoarding-two', name: 'Dashboard', component: StepTwo },
    { path: '/onBoarding-three', name: 'Dashboard', component: StepThree },  
    { path: '/meet-request', name: 'MeetRequest', component: MeetRequest }  
];

export default routes;
