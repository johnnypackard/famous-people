import React, { Component } from 'react';

class StarList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.starList.map(star => (
                        <li key={star.name}>
                        {star.name} was {star.role} in {star.show}
                    </li>
                    ))
                }
            </ul>
        );
    }
}

export default StarList;