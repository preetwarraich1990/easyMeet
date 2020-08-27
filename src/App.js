import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './scss/style.scss';
import createStore from './store/store';
import { loadUser } from './actions/auth';
import ProtectedRoute from './routing/ProtectedRoute';
import SignUp from './views/Pages/Register/signUp';
import stepOne from './views/Pages/onBoardingSteps/stepOne';
import PublicRoute from './routing/PublicRoute';

const loading = () => (
    <div className='animated fadeIn pt-3 text-center'>
        <div className='sk-spinner sk-spinner-pulse'></div>
    </div>
);

const store = createStore;

// Containers
const Login = React.lazy(() => import('./views/Pages/Login/Login'));
const Register = React.lazy(() => import('./views/Pages/Register/Register'));
const DefaultLayout = React.lazy(() => import('./containers/TheLayout'));

const App = () => {
    // useEffect(() => {
    //     store.dispatch(loadUser());
    // }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <PublicRoute exact path='/login' component={Login} />
                        <PublicRoute exact path='/sign-up' component={SignUp} />
                        <ProtectedRoute path='/' component={DefaultLayout} />
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
