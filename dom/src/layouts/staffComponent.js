import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import * as actions from '../actions';
// import { Input, Select, Icon, Avatar, Popconfirm, message, Button } from 'antd';
// import Navigation from './components/navigation';

class StaffComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.getTeacherDetails({id: this.props.match.params.id });
    }

    render() {
        const { selectedTeacher } = this.props;
        
        return (
            <div>
                Name: {selectedTeacher.name}
                Qualification: {selectedTeacher.qualification}
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(StaffComponent);