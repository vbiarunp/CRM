import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import * as actions from './actions';
import LoginComponent from './layouts/loginComponent';
import DashboardComponent from './layouts/dashboardComponent';

class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={LoginComponent} />
                        <Route exact path='/dashboard' component={DashboardComponent} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);