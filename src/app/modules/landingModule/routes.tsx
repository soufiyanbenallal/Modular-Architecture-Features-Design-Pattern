import React from 'react'
const LandingPage = React.lazy(() => import('./index'));

const routes = [
    {
        path:'/',
        Component: LandingPage
    }
];
export default routes