import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            turnamen: []
        };
    }
    componentDidMount() {

        axios.get('http://localhost:8000/turnamen').then(res => {
            this.setState({
                turnamen: res.data.data
            }, () => console.log('turnamen',this.state.turnamen))
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;
