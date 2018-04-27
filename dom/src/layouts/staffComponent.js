import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Breadcrumb, Icon, List } from 'antd';
import { Container, Row, Col } from 'reactstrap';
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
            templateRender = <Container>
                <Row>
                    <Col xs="3" sm="3">
                        <img style={{ width: '100%' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Col>
                    <Col>
                        <span className="staff-name">{selectedTeacher.name}</span>
                        <span className="staff-qualification">{selectedTeacher.qualification}</span>
                        <span className="staff-qualification">Joining Date: {selectedTeacher.qualification}</span>
                        <span className="staff-qualification">Total Experience: {selectedTeacher.qualification}</span>
                        <span className="staff-qualification">Address: {selectedTeacher.qualification}</span>
                    </Col>
                </Row>
            </Container>
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
                <div>
                    <div>

                    </div>
                    <div>
                        {templateRender}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(StaffComponent);