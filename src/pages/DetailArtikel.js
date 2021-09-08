import axios from 'axios';
import React, { Component } from 'react';

class DetailArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aktif_komentar: false,
            data_blog: [],
            data_komentar: [],
            formKomentar: {
                id_artikel: "",
                id_user: "",
                isi: "",
            },
        };
    }
    aktifKomentar = (input) => {
        this.setState({
            aktif_komentar: input
        })
    }
    getKomentar = () => {
        let id = this.props.match.params.id
        axios.get(`http://localhost:8000/komentar/${id}`).then(res => {
            console.log(res)
            this.setState({
                data_komentar: res.data.data
            }, () => console.log('komentar', this.state.data_komentar))
        })

    }
    handleFormChangeKomentar = (event) => {
        let id = this.props.match.params.id

        let formKomentarNew = { ...this.state.formKomentar };
        formKomentarNew[event.target.name] = event.target.value;
        formKomentarNew['id_artikel'] = id;
        formKomentarNew['id_user'] = localStorage.getItem('id');
        this.setState({
            formKomentar: formKomentarNew,
        }, () => console.log(formKomentarNew))
    }
    handleSubmitKomentar = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/komentar/tambah-komentar', this.state.formKomentar).then(res => {
            console.log(res.data,this.state.formKomentar);
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:8000/artikel/${id}`).then(res => {
            console.log(res)
            this.setState({
                data_blog: res.data.data.data[0]
            }, () => console.log('tanggal', this.state.data_blog))
        })
        this.getKomentar()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 img-detail-artikel my-4">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" />
                    </div>
                    <div className="col-md-12 my-4">
                        <p class="font-italic card-text">{(this.state.data_blog.tanggal)}</p>

                        <h5 className="card-title font-weight-bold">{(this.state.data_blog.judul)}</h5>
                        <p className="card-text">{(this.state.data_blog.deskripsi)}</p>
                    </div>
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="w-25">
                                <img src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" width="50" height="50" className="br-50 rounded mx-auto d-block" />
                            </div>
                            <div className="w-75">
                                <form onSubmit={this.handleSubmitKomentar}>
                                    <div className="form-group">
                                        <textarea className="form-control" rows={2} placeholder="Masukkan Komentar" onFocus={() => this.aktifKomentar(true)} name="isi"
                                            onChange={this.handleFormChangeKomentar} />
                                    </div>
                                    {
                                        this.state.aktif_komentar ? (
                                            <>
                                                <button type="button" className="btn btn-danger float-right" onClick={() => this.aktifKomentar(false)}>Batal</button>
                                                <button type="button" type="submit" className="btn btn-info float-right mx-2">Kirim</button>

                                            </>
                                        )
                                            : (
                                                ''
                                            )
                                    }
                                </form>
                            </div>
                        </div>
                        {
                            this.state.data_komentar.map(komentar => {
                                return (
                                    <div className="d-flex justify-content-between align-items-center my-2">
                                        <div className="w-25">
                                            <img src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" width="50" height="50" className="br-50 rounded mx-auto d-block" />
                                        </div>
                                        <div className="w-75">
                                            <h5 className="card-title font-weight-bold">{komentar.user}</h5>

                                            <p className="card-text w-75">{komentar.isi}</p>
                                            <p className="font-italic">4 Menit yang lalu</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default DetailArtikel;
