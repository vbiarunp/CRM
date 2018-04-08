import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';
const FormItem = Form.Item;

class LoginComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            useremail: '',
            password: ''
        }
        this.fireLogin = this.fireLogin.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    fireLogin(e) {
        this.props.fetchLogin(this.state);
        // axios.post('http://localhost:5000/api/login', details);
    }

    changeValue(e) {
        switch (e.target.id) {
            case 'useremail':
                this.setState({
                    useremail: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
        }

    }

    componentWillMount() {
    }



    render() {
        return (
            <Form className="login-form" method="post">
                <FormItem>
                    <Input id="useremail" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="useremail" onChange={this.changeValue} />
                </FormItem>
                <FormItem>
                    <Input id="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={this.changeValue} />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.fireLogin}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        )
    }
}

export default connect(null, actions)(LoginComponent);