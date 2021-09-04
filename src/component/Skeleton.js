import React, { Component } from 'react';

class Skeleton extends Component {
    render() {
        return (
            <div className={`skeleton ${this.props.type}`}>
                
            </div>
        );
    }
}

export default Skeleton;
