import React from 'react';

const Dashboard = React.lazy(() => import('~/views/pages/PrivatePages/Dashboard/Dashboard'));
const StepOne = React.lazy(() => import('~/views/Pages/PrivatePages/OnBoardingSteps/StepOne'));
const StepTwo = React.lazy(() => import('~/views/Pages/PrivatePages/OnBoardingSteps/StepTwo'));
const StepThree = React.lazy(() => import('~/views/Pages/PrivatePages/OnBoardingSteps/StepThree')); 

const routes = [
    { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/onboarding-one', name: 'onboarding-one', component: StepOne },
    { path: '/onboarding-two', name: 'onboarding-two', component: StepTwo },
    { path: '/onboarding-three', name: 'onboarding-three', component: StepThree } 
];

export default routes;
