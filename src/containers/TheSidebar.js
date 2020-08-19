import React from 'react';
import { withRouter } from 'react-router-dom';
const TheSidebar = props => {
    return <div>I am sidebar</div>;
};

export default React.memo(withRouter(TheSidebar));
