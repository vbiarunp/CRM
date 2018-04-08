import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Input, Select, Icon, Avatar, Popconfirm, message, Button } from 'antd';
import Navigation from './components/navigation';

class DashboardComponent extends Component {
    constructor(props) {
        super();
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.logoutUser();
    }

    render() {
        return (
            <div className="Dash_layout">
                <div className="Nav_layout">
                    <ul>
                        <li>Dashboard</li>
                        <li>Staffs</li>
                        <li>Classes</li>
                        <li>Students</li>
                    </ul>
                </div>

                <div className="Main_layout">
                    <Navigation />
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(DashboardComponent);