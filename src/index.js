// import React from 'react';
// import {render} from 'react-dom';
// import {Main} from './containers/main';
//
// render(
//     <Main />, document.getElementById('app')
// );


import React from 'react';
import {renderRoutes} from 'react-router-config';

const App = ({route}) => (
    <div>
        {renderRoutes(route.routes)}
    </div>
);

export default {component: App};
