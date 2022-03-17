import React from "react";
import { Switch, Route } from 'react-router-dom';
import Config from '../src/pages/config';
import Home from '../src/pages/Home';

export default () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/config">
                <Config/>
            </Route>
        </Switch>
    )
}