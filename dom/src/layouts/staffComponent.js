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
        this.removeRecord = this.removeRecord.bind(this);
    }

    removeRecord(id){
        this.props.removeStaff({ 'id': this.props.staff.selectedTeacher._id });
        this.props.history.push('/dashboard');
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
                    <Col className="detail-list">
                        <span className="staff-name">
                            <Row>
                                <Col xs="3" sm="3">Name: </Col>
                                <Col xs="9" sm="9">{selectedTeacher.name}</Col>
                            </Row>
                        </span>
                        <span className="staff-qualification">
                            <Row>
                                <Col xs="3" sm="3">Qualification: </Col>
                                <Col xs="9" sm="9">{selectedTeacher.qualification}</Col>
                            </Row>
                        </span>
                        <span className="staff-qualification">
                            <Row>
                                <Col xs="3" sm="3">Joining Date: </Col>
                                <Col xs="9" sm="9">{selectedTeacher.qualification}</Col>
                            </Row>
                        </span>
                        <span className="staff-qualification">
                            <Row>
                                <Col xs="3" sm="3">Total Experience: </Col>
                                <Col xs="9" sm="9">{selectedTeacher.qualification}</Col>
                            </Row>
                        </span>
                        <span className="staff-qualification">
                            <Row>
                                <Col xs="3" sm="3">Address: </Col>
                                <Col xs="9" sm="9">{selectedTeacher.qualification}</Col>
                            </Row>
                        </span>
                        <span className="staff-qualification">
                            <Row>
                                <Col xs="3" sm="3"><button>Edit</button></Col>
                                <Col xs="9" sm="9"><button onClick={this.removeRecord}>Remove Record</button></Col>
                            </Row>
                        </span>
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