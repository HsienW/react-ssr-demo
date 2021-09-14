import {Page1} from './containers/page-1';
import {Page2} from './containers/page-2';

export default [
    {
        routes: [
            {
                component: Page1,
                path: '/',
                exact: true,
            },
            {
                component: Page2,
            },
        ],
    }
];
