import React, { Component } from 'react';
import Skeleton from './Skeleton';
import '../../src/App.css'

class SkeletonTurnamen extends Component {
    render() {
        return (
            <div className="col-md-4 ">
                <div className="d-flex justify-content-between card-liga">
                    <div className="w-25 d-flex align-items-center justify-content-center ">
                        <Skeleton type='avatar' />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-75">
                        <Skeleton type='title' />
                    </div>
                </div>
            </div>
        );
    }
}

export default SkeletonTurnamen;
