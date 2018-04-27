import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Breadcrumb, Icon } from 'antd';
// import { Input, Select, Icon, Avatar, Popconfirm, message, Button } from 'antd';
// import Navigation from './components/navigation';

class StaffComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getTeacherDetails({ id: this.props.match.params.id });
    }

    render() {
        let templateRender = '';

        if (this.props.staff.selectedTeacher) {
            const { selectedTeacher } = this.props.staff;
            templateRender = <div>
                Name: {selectedTeacher.name}
                Qualification: {selectedTeacher.qualification}
            </div>
        }

        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Link to="/dashboard"><Icon type="home" /></Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>Staffs</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                {templateRender}
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(StaffComponent);