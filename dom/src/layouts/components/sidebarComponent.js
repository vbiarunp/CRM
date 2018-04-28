import React, { Component } from 'react';

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div className="side-bar">
                <ul>
                    <li>Staffs</li>
                    <li>Events</li>
                    <li>Classes</li>
                </ul>
            </div>
        );
    }
}

export default SidebarComponent;