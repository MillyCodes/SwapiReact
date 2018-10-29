import React, { Component } from "react";

class CharInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };

        this.open = this.open.bind(this);
        this.close = this.open.bind(this);
    }
    open() {
        this.setState({ expanded: !this.state.expanded });
    }
    close() {
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        const info = this.props.charInfo;
        if (!this.state.expanded) {
            return (
                <p className="btn btn-info" onClick={this.open}>
                    Show info
                </p>
            );
        }

        return (
            <div>
                <p className="btn btn-warning" onClick={this.close}>
                    Hide Info
                </p>
                <ul>
                    <li>
                        <h2>Username: {info.username}</h2>
                    </li>
                    <li>
                        <h2>E-mail: {info.email}</h2>
                    </li>
                    <li>
                        <h2>Phone: {info.phone}</h2>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CharInfo;
