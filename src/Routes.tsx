import React, {ReactElement} from 'react';
import {Routes as Switch, Route, BrowserRouter} from 'react-router-dom';
import landingRoutes from "@modules/landingModule/routes";
import articleRoutes from "@modules/newsModule/routes";

const routes = [
    ...landingRoutes,
    ...articleRoutes
]

export default function Routes() {
  return (
        <BrowserRouter>
            <Switch>
                {routes.map((entry, key: number): ReactElement => {return (<Route key={key} {...entry}/>)})}
            </Switch>
        </BrowserRouter>
  )
}
