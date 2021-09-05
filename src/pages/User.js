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
            <div>
                user
            </div>
        );
    }
}

export default User;
