import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Input, Select, Icon, Avatar, Popconfirm, message, Modal, notification, Card, Col, Row } from 'antd';
const { Meta } = Card;
const Search = Input.Search;

class StaffListComponent extends Component {

    constructor(props) {
        super();
        this.state = {};
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event){
        this.props.searchTeacher({
            search: event.target.value
        });
    }

    componentWillMount() {
        this.props.getTeacher();
    }

    render() {
        let staffDOM = '';

        if (this.props.staff.listOfStaff) {
            staffDOM = this.props.staff.listOfStaff.map((element) => {
                return <Col span={5} key={element._id}>
                    <Card
                        style={{ width: '100%' }}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={element.name}
                            description={element.qualification}
                        />
                    </Card>
                </Col>
            });
        }

        return (
            <Row gutter={8}>
                <div>
                    <Search placeholder="input search text" onChange={this.onSearch} style={{ width: 500 }} />
                </div>

                {staffDOM}
                
            </Row>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(StaffListComponent);