import React from 'react'
const NewsPage = React.lazy(() => import('./index'));

const routes = [
    {
        path:'/news',
        Component: NewsPage
    }
];

export default routes