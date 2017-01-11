import React from 'react';
import {Route} from 'react-router';
import App from './component/app';
import Home from './component/home';
import Account from './component/account'

export default (
    <Route component={App}>
        <Route path='/' component={Login} />
        <Route path="/account" component={Account}/>
        <Route path="/vehicles" component={Vehicles}/>
        <Route path="/trips" component={Trips}/>
    </Route>
);