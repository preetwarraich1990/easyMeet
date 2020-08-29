import React, { useEffect } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store/store';
import ProtectedRoute from './routing/ProtectedRoute';
import PublicRoute from './routing/PublicRoute';

// Containers
const Login = React.lazy(() => import('./views/Pages/PublicPages/Login/Login'));
const SignUp = React.lazy(() => import('./views/Pages/PublicPages/Register/SignUp'));
const DefaultLayout = React.lazy(() => import('./containers/PrivateLayouts/TheLayout'));

const loading = () => (
    <div className='animated fadeIn pt-3 text-center'>
        <div className='sk-spinner sk-spinner-pulse'></div>
    </div>
);

const store = createStore;


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <PublicRoute exact path='/login' component={Login}/>
                        <PublicRoute exact path='/sign-up' component={SignUp}/>
                        <ProtectedRoute path='/' component={DefaultLayout}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
