import React, { Component } from 'react';

class CurrentNewStar extends Component {
    render() {
        return (
            <div>
                <h2>Add a new star to your list!</h2>
                <p>{this.props.newStar.name} portrayed {this.props.newStar.role} in {this.props.newStar.show}</p>
            </div>
        );
    }
}

export default CurrentNewStar;