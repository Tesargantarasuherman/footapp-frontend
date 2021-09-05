import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataUser: []
        };
    }
    componentDidMount() {
        let id = localStorage.getItem('id')
        axios.get(`http://localhost:8000/user/${id}`, {
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // 'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                // 'Access-Control-Allow-Origin': 'true',
                // 'Access-Control-Allow-Credentials': 'true',
                'Authorization': `Authorization ${localStorage.getItem("token")}`
            }
        }).then(res => {
            console.log('res', res)
            // this.setState({ myClass: res.data.data }, () => console.log('val', this.state.myClass))
        })
        //     }
    }
    render() {
        return (
            <div className="container mt-4">
                <div className="body height-90  d-flex justify-content-between ">
                    <div className="w-25 bg-success br-10">
                        <div className=" d-flex justify-content-center  pt-4">
                            <img src="https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" className="br-50 " width={100} height={100} />
                        </div>
                        <div className='d-flex justify-content-between mt-4 mx-2'>
                            <span className="text-light">
                                Nama
                            </span>
                            <span className="text-light">
                                Tesar Gantara Suherman
                            </span>
                        </div>
                    </div>
                    <div className="w-75 bg-success br-20 ml-4">
                        <div className=" d-flex justify-content-center  pt-4">
                            <img src="https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" className="br-50 " width={100} height={100} />

                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <span className="text-light">
                                Nama
                            </span>
                            <span className="text-light">
                                Tesar Gantara Suherman
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
