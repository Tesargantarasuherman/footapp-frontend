import React, { Component } from 'react';
import axios from 'axios'

class Klasemen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            klasemen: [],
            jadwal: [],
            hasil: [],
            turnamen: ''
        };
    }
    componentDidMount() {
        let idKlasemen = this.props.match.params.id;

        axios.get(`http://localhost:8000/klasemen/${idKlasemen}`).then(res => {
            this.setState({
                turnamen: res.data.data.klasifikasi_turnamen,
                klasemen: res.data.data.klasemen
            }, () => console.log(this.state.klasemen))
        }
        )
            .catch(error => {
                console.log(error)
            })
        axios.get(`http://localhost:8000/pertandingan/${idKlasemen}`).then(res => {
            this.setState({
                jadwal: res.data.data
            }, () => console.log(res.data.data))
        }
        )
            .catch(error => {
                console.log(error)
            })
        axios.get(`http://localhost:8000/hasil-pertandingan/${idKlasemen}`).then(res => {
            this.setState({
                hasil: res.data.data
            }, () => console.log(res.data.data))
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <>
                <div className="container mt-2">
                    <h3>Klasemen {this.state.turnamen}</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-success">
                                <th scope="col">#</th>
                                <th scope="col">Nama Klub</th>
                                <th scope="col">Main</th>
                                <th scope="col">Menang</th>
                                <th scope="col">Kalah</th>
                                <th scope="col">Imbang</th>
                                <th scope="col">Poin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.klasemen.map((klasemen) => {
                                return (
                                    <tr>
                                        <td>{klasemen.no}</td>
                                        <td>{klasemen.nama_klub}</td>
                                        <td>{klasemen.main}</td>
                                        <td>{klasemen.menang}</td>
                                        <td>{klasemen.kalah}</td>
                                        <td>{klasemen.imbang}</td>
                                        <td><strong> {klasemen.poin}</strong></td>
                                    </tr>
                                )
                            })
                            }

                        </tbody>
                    </table>

                    <div className="jadwal-pertandingan">
                        <div className="row">
                            <div className="col-md-6">{this.state.jadwal.map((jadwal) => {
                                return (

                                    <div className='row'>
                                        <div className="col-12">                                    
                                            <h4>Jadwal {jadwal.klub_turnamen}</h4>
                                        </div>
                                        <div className="col">
                                            <h6>{jadwal.klub_home}</h6>
                                        </div>
                                        <div className="col">
                                        <h6>{jadwal.waktu_pertandingan}</h6>
                                        <h6>{jadwal.waktu_pertandingan}</h6>
                                        </div>
                                        <div className="col">
                                            <h6>{jadwal.klub_away}</h6>

                                        </div>

                                    </div>
                                )
                            })
                            }</div>
                            <div className="col-md-6">{this.state.hasil.map((jadwal) => {
                                return (

                                    <div className='row'>
                                        <div className="col-12">                                    
                                            <h4>Hasil {jadwal.klub_turnamen}</h4>
                                        </div>
                                        <div className="col">
                                            <h6>{jadwal.klub_home}</h6>
                                            <h6>{jadwal.skor_home}</h6>
                                        </div>
                                        <div className="col">
                                        <h6>{jadwal.waktu_pertandingan}</h6>
                                        <h6>{jadwal.waktu_pertandingan}</h6>
                                        </div>
                                        <div className="col">
                                            <h6>{jadwal.klub_away}</h6>
                                            <h6>{jadwal.skor_away}</h6>
                                        </div>

                                    </div>
                                )
                            })
                            }</div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Klasemen;
