import React, { Component } from 'react';
import { Input, Button, Avatar, Popconfirm, Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const Option = Select.Option;

class Navigation extends Component {
    constructor(props) {
        super();
    }

    render() {
        const selectBefore = (
            <Select defaultValue="Staff" style={{ width: 90 }}>
                <Option value="Staff">Staff</Option>
                <Option value="Student">Student</Option>
            </Select>
        );

        return (
            <div>
                <ul>
                    <li>
                        <Input addonBefore={selectBefore} placeholder="Search for the members" />
                    </li>
                    <li>
                        <div>
                            <Avatar icon="user" />
                            <Popconfirm placement="bottom" title='Shall we logout?' onConfirm={this.logout} okText="Yes" cancelText="No">
                                <Button>Logout</Button>
                            </Popconfirm>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(null, actions)(Navigation);