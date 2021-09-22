import axios from 'axios';
import React, { Component } from 'react';
import Skeleton from '../component/Skeleton';
import SkeletonTurnamen from '../component/SkeletonTurnamen';

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="body height-90  d-flex justify-content-between ">
                    <div className="w-25 bg-success br-10">
                        <div className=" d-flex justify-content-center  mt-4">
                            dasdasd
                        </div>
                        <div className='d-flex justify-content-center text-light mt-4 mx-2'>
                            dasdasd
                        </div>
                        <div className='d-flex justify-content-center text-light mx-2'>
                            dsadad

                        </div>
                    </div>
                    <div className="w-75 bg-success br-20 ml-4">

                        <div className="mt-4 mx-4 px-4'">
                            <div className="col-12">

                                dasdasda
                            </div>
                        </div>

                        <div className="text-center bg-white mx-4 py-2 br-20">
                            <div className="col-12">
                                <span>Data Tidak Ditemukan</span>
                            </div>
                        </div>
                        <div className="mt-4 mx-4 px-4">
                            <div className="col-12">
                                <div className="bg-white chat-saya br-20">
                                    dsadasda
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )}
}

export default Chat;
