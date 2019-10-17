import React from "react";
import Home from '../screen/Home'
import Other from '../screen/Other'
import {
    Switch,
    Route,
} from "react-router-dom";

export default function navigationView() {
    return (
        <Switch>
            <Route path="/other/" component={Other} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
}