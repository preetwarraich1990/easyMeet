import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    function requireAuth(nextState, replace, next) {
        if (isAuthenticated) {
            replace({
                pathname: '/onBoarding-one',
                state: { nextPathname: nextState.location.pathname }
            });
        }
        next();
    }
    return <Route {...rest} render={props => <Component {...props} onEnter={requireAuth} />} />;
};

export default PublicRoute;
