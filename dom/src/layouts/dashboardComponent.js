import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Input, Form, Select, Icon, Avatar, Popconfirm, message, Button, Modal } from 'antd';
import Navigation from './components/navigation';
import StaffComponent from './staffComponent';

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
        // this.logout = this.logout.bind(this);
        this.showForm = this.showForm.bind(this);
        this.addTeacher = this.addTeacher.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    showForm(){
        this.setState({
            visible: !this.state.visible
        });
    }

    addTeacher(){
        this.props.addTeacher(this.state.teacherDetails);
    }

    componentWillReceiveProps(prevProps, nextProps){
        if(prevProps.statusMessage.type === 'success'){
            this.setState({
                visible: false
            });
        }
    }

    onValueChange(event){
        const { teacherDetails } = this.state;
        teacherDetails[event.target.id] = event.target.value;
        this.setState({
            teacherDetails
        });
    }
    // logout() {
    //     this.props.logoutUser();
    // }

    render() {
        const { teacherDetails } = this.state;

        return (
            <div>
                <button onClick={this.showForm}>Add Teacher</button>
                <Modal title="Add Teacher" visible={this.state.visible} onOk={this.handleOk} onCancel={this.showForm} >
                        <Input type='text' id="name" value={teacherDetails.name} onChange={this.onValueChange} />
                        <Input type='text' id="qualification" value={teacherDetails.qualification} onChange={this.onValueChange} />
                        <button onClick={this.addTeacher}>Register</button>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(item){
    return { statusMessage : item.statusMessage };
}

export default connect(mapStateToProps, actions)(DashboardComponent);