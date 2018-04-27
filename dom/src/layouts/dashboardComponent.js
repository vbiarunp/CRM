import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Input, Select, Icon, Avatar, Popconfirm, message, Modal, notification, Card, Col, Row, Form } from 'antd';
import StaffListComponent from './components/staffListComponent';
import Navigation from './components/navigation';
const { Meta } = Card;
const { Item } = Form;

class DashboardComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            visible: false,
            teacherDetails: {
                name: '',
                qualification: ''
            }
        };
        this.showForm = this.showForm.bind(this);
        this.addTeacher = this.addTeacher.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    showForm() {
        this.setState({
            visible: !this.state.visible
        });
    }

    addTeacher() {
        this.props.addTeacher(this.state.teacherDetails);
    }

    componentWillReceiveProps(prevProps, nextProps) {
        if (prevProps.statusMessage && prevProps.statusMessage.type === 'success') {
            this.setState({
                visible: false
            });
            const openNotificationWithIcon = (type) => {
                notification[type]({
                    message: 'Added the record successfully.'
                });
            };
            openNotificationWithIcon('success');
        }
    }

    onValueChange(event) {
        const { teacherDetails } = this.state;
        teacherDetails[event.target.id] = event.target.value;
        this.setState({
            teacherDetails
        });
    }

    render() {
        const { teacherDetails } = this.state;

        return (
            <div>
                <Navigation />
                <button onClick={this.showForm}>Add Staff</button>
                <Modal title="Add Teacher" visible={this.state.visible} onOk={this.handleOk} onCancel={this.showForm}
                    footer={[]}>
                    <Item>
                        <Input type='text' id="name" value={teacherDetails.name} onChange={this.onValueChange} placeholder="Enter the staff name" />
                    </Item>
                    <Item>
                        <Input type='text' id="qualification" value={teacherDetails.qualification} onChange={this.onValueChange} placeholder="Enter the staff qualification" />
                    </Item>
                    <Item>
                        <Input type='text' id="email" value={teacherDetails.email} onChange={this.onValueChange} placeholder="Enter the staff email" />
                    </Item>
                    <button onClick={this.addTeacher}>Add Staff</button>
                </Modal>
                <StaffListComponent />
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(DashboardComponent);