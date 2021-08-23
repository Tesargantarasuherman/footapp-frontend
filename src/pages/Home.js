import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
  } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            turnamen: [],
            jadwal: [],
        };
    }
    componentDidMount() {

        axios.get('http://localhost:8000/turnamen').then(res => {
            this.setState({
                turnamen: res.data.data
            }, () => console.log('turnamen', this.state.turnamen))
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    getJadwal =(id)=>{
        axios.get(`http://localhost:8000/pertandingan/${id}`).then(res => {
            this.setState({
                jadwal: res.data.data
            }, () => console.log(res.data.data))
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="container mt-2">
                {
                    this.state.turnamen.map(tur => {
                        return (
                            <div className="card my-2">
                                <div className="card-body">
                                    <Link to={`/klasemen/${tur.id}`}>{tur.nama_turnamen}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Home;
