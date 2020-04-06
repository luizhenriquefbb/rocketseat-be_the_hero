import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import Logon from './pages/logon/index';
import Register from './pages/register/index';
import Profile from './pages/profile/index';
import NewIncident from './pages/newIncident/index';
import AllIncidents from './pages/allIncidents/index';
import CardDetails from './pages/cardDetails/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" exact component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/incidents/new" exact component={NewIncident} />
                <Route path="/guest" exact component={AllIncidents} />
                <Route path="/card_details" exact component={CardDetails} />
            </Switch>
        </BrowserRouter>
    );
}
