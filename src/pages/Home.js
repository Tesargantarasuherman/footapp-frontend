import React, { Component } from 'react';
import axios from 'axios'
import '../../src/App.css'
import {
    Link
} from "react-router-dom";
import Skeleton from '../component/Skeleton';
import SkeletonTurnamen from '../component/SkeletonTurnamen';
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
            setTimeout(() => {
                this.setState({
                    turnamen: res.data.data
                })
            }, 5000)
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    getJadwal = (id) => {
        axios.get(`http://localhost:8000/pertandingan/${id}`).then(res => {
            setTimeout(() => {
                this.setState({
                    jadwal: res.data.data
                })
            }, 50000)

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
                    <h3 className="text-secondary">Daftar Liga</h3>

                    <div className="row">
                        {
                            this.state.turnamen && this.state.turnamen.map(tur => {
                                return (
                                    <div className="col-md-4 ">
                                        <div className="d-flex justify-content-between card-liga">
                                            <div className="lihat-detail-liga d-flex align-items-center justify-content-center">
                                                <Link className="text-link" to={`/klasemen/${tur.id}`}>Lihat Detail</Link>
                                            </div>
                                            <img src="https://images.fotmob.com/image_resources/logo/leaguelogo/47.png" className="rounded mx-auto d-block br-50 w-25" width={60} height={60} />
                                            <div className="d-flex align-items-center justify-content-center w-75">
                                                <span>{tur.nama_turnamen ? tur.nama_turnamen : <Skeleton type="title" />}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                        {
                            this.state.turnamen.length == 0  && [1, 2, 3, 4, 5,6].map(tur => {
                                return (
                                    <SkeletonTurnamen key={tur} />
                                )
                            })
                        }

                    </div>
                </div>

            </>
        );
    }
}

export default Home;
