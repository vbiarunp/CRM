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
            <div>Dash</div>
        )
    }
}

export default connect(null, actions)(LoginComponent);