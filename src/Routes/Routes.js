import React from "react";
import { Switch, Route } from 'react-router-dom';
import Config from '../pages/config';
import Home from '../pages/Home';

export default () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/config">
                <Config/>
            </Route>
            <Route exact path="/sobre">
                Sobre
            </Route>
        </Switch>
    )
}