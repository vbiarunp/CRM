import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as actions from './actions';
import LoginComponent from './layouts/loginComponent';
import DashboardComponent from './layouts/dashboardComponent';

class App extends Component {
    constructor(props) {
        super();
    }

    render() {

        return (
            <div className="rootLayout">
                <BrowserRouter>
                    <div className="rootLayout">
                        <Route exact path='/' render={() => (
                            this.props.staff ? (
                                <Redirect to="/dashboard" />
                            ) : (
                                    <LoginComponent />
                                ))} />
                                
                        <Route component={DashboardComponent} path="/dashboard">

                        </Route>
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