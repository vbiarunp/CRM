import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StaffListComponent from './components/staffListComponent';
import Navigation from './components/navigation';
import SidebarComponent from './components/sidebarComponent';

class DashboardComponent extends Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <Navigation />
                </div>
                <div>
                    <SidebarComponent />
                    <div style = {{ width: 1000, float: 'left' }}>
                    {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(DashboardComponent);