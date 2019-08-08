import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom'

import MainPage from '../container/MainPage';
import UserPage from '../container/UserPage';

export default class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path='/:id' component={UserPage} />
                
            </Switch>
        )
    }
}
