import React, { Component } from 'react';
import { Input, Button, Avatar, Popconfirm, Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const Option = Select.Option;

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.logoutUser();
    }

    render() {
        return (
            <div>
                <div>
                    <Avatar icon="user" />
                    <Button onClick={this.logout}>Logout</Button>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(Navigation);