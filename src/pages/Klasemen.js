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
                jadwal: res.data.data.data
            }, () => console.log(res.data.data.data))
        }
        )
            .catch(error => {
                console.log(error)
            })
        axios.get(`http://localhost:8000/hasil-pertandingan/${idKlasemen}`).then(res => {
            this.setState({
                hasil: res.data.data.data
            }, () => console.log('hasil', res.data.data.data))
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <>
                <div className="container mt-2 ">
                    <h3 className="text-secondary">Jadwal Pertandingan</h3>

                    <div className=" mx-2 wrapper-jadwal">
                        {/*  */}
                        <div className="card-jadwal-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center bg-success px-2 text-light br-10">
                                        <div>11 September</div>
                                        <div>19.00</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="card-jadwal-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center bg-success px-2 text-light br-10">
                                        <div>11 September</div>
                                        <div>19.00</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="card-jadwal-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center bg-success px-2 text-light br-10">
                                        <div>11 September</div>
                                        <div>19.00</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="card-jadwal-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center bg-success px-2 text-light br-10">
                                        <div>11 September</div>
                                        <div>19.00</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    <section className="card-klasemen my-4 px-4 py-4">
                        <h3 className="text-secondary">Klasemen {this.state.turnamen}</h3>
                        <table className="table">
                            <thead>
                                <tr className="bg-success font-white">
                                    <th scope="col" className="font-xs">#</th>
                                    <th scope="col" className="font-xs">Team</th>
                                    <th scope="col" className="font-xs">Main</th>
                                    <th scope="col" className="font-xs">Menang</th>
                                    <th scope="col" className="font-xs">Kalah</th>
                                    <th scope="col" className="font-xs">Imbang</th>
                                    <th scope="col" className="font-xs">GM</th>
                                    <th scope="col" className="font-xs">GK</th>
                                    <th scope="col" className="font-xs">GD</th>
                                    <th scope="col" className="font-xs">Poin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.klasemen.map((klasemen) => {
                                    return (
                                        <tr className="mtable-2 font-xs font-weight-bold">
                                            <td className="align-self-center"> 
                                                {klasemen.no}
                                            </td>
                                            <td>
                                            <p className="align-self-center">
                                            <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={20} height={20} className="br-50 mr-2"/>
                                            {klasemen.nama_klub}
                                            </p>
                                            </td>
                                            <td className="align-self-center">{klasemen.main}</td>
                                            <td>{klasemen.menang}</td>
                                            <td>{klasemen.kalah}</td>
                                            <td>{klasemen.imbang}</td>
                                            <td>{klasemen.gol_memasukan}</td>
                                            <td>{klasemen.gol_kemasukan}</td>
                                            <td>{klasemen.gol_memasukan - klasemen.gol_kemasukan}</td>
                                            <td><strong> {klasemen.poin}</strong></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </section>
                    {/* hasil Pertandingan */}
                    <h3 className="text-secondary">Hasil Pertandingan</h3>

                    <div className=" mx-2 wrapper-hasil">

                        {/*  */}
                        <div className="card-hasil-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span>1</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center">
                                        <span>11 September</span><br />
                                        <span>19.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="card-hasil-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span>1</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center">
                                        <span>11 September</span><br />
                                        <span>19.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="card-hasil-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span>1</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center">
                                        <span>11 September</span><br />
                                        <span>19.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="card-hasil-pertandingan px-2 py-4">
                            <div className="d-flex justify-content-around">
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span>1</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-center">
                                        <span>11 September</span><br />
                                        <span>19.00</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column">
                                    <img src="https://images.fotmob.com/image_resources/logo/teamlogo/8197_small.png" width={60} height={60} />
                                    <span>Leicester City</span>
                                    <span className="font-weight-bold">0</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>

                    {/* end hasil Pertandingan */}

                </div>
            </>
        );
    }
}

export default Klasemen;
