import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import * as actions from './actions';
import LoginComponent from './layouts/loginComponent';
import DashboardComponent from './layouts/dashboardComponent';
import StaffComponent from './layouts/staffComponent';

class App extends Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem('Authorization')){
            this.props.storeUser(localStorage.getItem('Authorization'));
        }
    }

    render() {
        return (
            <div className="rootLayout">
                <BrowserRouter>
                    <div className="rootLayout">
                        <Switch>
                            <Route exact path='/' render={() => (
                                this.props.staff.user ? (<Redirect to="/dashboard" />) : (<LoginComponent />)
                            )} />

                            <Route exact component={DashboardComponent} path="/dashboard" />
                            <Route exact path="/staff/:id" component={StaffComponent} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { staff: item.staff };
}

export default connect(mapStateToProps, actions)(App);