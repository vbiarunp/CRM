import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Input, Select, Icon, Avatar, Popconfirm, message, Button } from 'antd';
import Navigation from './components/navigation';

class StaffComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="Dash_layout">
                Staff
            </div>
        )
    }
}

export default connect(null, actions)(StaffComponent);