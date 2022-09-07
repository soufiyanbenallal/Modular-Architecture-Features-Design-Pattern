import React, {ReactElement, Suspense} from 'react';
import {Routes as Switch, Route, BrowserRouter} from 'react-router-dom';
import landingRoutes from "@modules/landingModule/routes";
import newsRoutes from "@modules/newsModule/routes";
import SpinnerComponent from '@shared/components/loading/SpinnerComponent';

const routes = [
    ...landingRoutes,
    ...newsRoutes
]

export default function Routes() {
    console.log('ttttt');
    
  return (
        <BrowserRouter>
            <Suspense fallback={<div className='loader-wrapper'><SpinnerComponent/></div>}>
                <Switch>
                    {routes.map(({Component, ...entry}, key: number): ReactElement => {return (<Route key={key} {...entry} element={<Component />}/>)})}
                </Switch>
            </Suspense>
        </BrowserRouter>
  )
}
