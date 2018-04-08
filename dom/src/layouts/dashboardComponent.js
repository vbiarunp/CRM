import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DashboardComponent extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>Dash</div>
        )
    }
}

export default connect(null, actions)(DashboardComponent);