import axios from 'axios';
import React, { Component } from 'react';
import Skeleton from '../component/Skeleton';
import SkeletonTurnamen from '../component/SkeletonTurnamen';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataUser: [],
            formBuatTim: {
                nama_tim: "",
                logo_tim: "",
                id_user: "",
            },
            image: "",
            dataUserTim: [],
            data_cari: {
                email: ""
            },
            data_pengguna: "",
            data_pemain: {
                id_tim: "",
                nama_pemain: "",
                no_punggung: "",
                posisi: "",
                status: "",
            },
            nama_tim: "",
            daftar_pemain: [],
        };
        this.onChange = this.onChange.bind(this);


    }

    // FILE
    onChange(e) {
        let files = e.target.files
        this.setState({
            image: files[0]
        })
    }
    // 
    handleFormChangeBuatTim = (event) => {
        let id = localStorage.getItem('id');
        let formBuatTimNew = { ...this.state.formBuatTim };
        formBuatTimNew[event.target.name] = event.target.value;
        formBuatTimNew['id_user'] = id;
        this.setState({
            formBuatTim: formBuatTimNew
        }, () => console.log('new', formBuatTimNew))
    }

    handleSubmitBuatTim = (e) => {
        console.log('submit', this.state.formBuatTim)
        e.preventDefault()

        const fd = new FormData();

        fd.append('logo_tim', this.state.image);
        fd.append('nama_tim', this.state.formBuatTim.nama_tim);
        fd.append('id_user', this.state.formBuatTim.id_user);

        axios.post('http://localhost:8000/tim/tambah-tim', fd).then(res => {
            console.log('add-tim', res.data);
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    getUserTim() {
        let id = localStorage.getItem('id')
        axios.get(`http://localhost:8000/tim/${id}`, {
        }).then(res => {

            this.setState({
                dataUserTim: res.data.data
            }, () => this.getTim(res.data.data.id))

        })
    }
    dataUser() {
        console.log('val', this.state.dataUser)
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
            setTimeout(() => { this.setState({ dataUser: res.data.data }, () => console.log('val', this.state.dataUser)) }, 5000)

        })
    }
    getTim(id) {
        axios.get(`http://localhost:8000/tim/${id}/anggotatim`, {
        }).then(res => {
            console.log('respontim', res)
            this.setState({
                nama_tim: res.data.data.tim,
                daftar_pemain: res.data.data.anggota_tim

            }, () => console.log('nama tim', this.state.daftar_pemain)
            )

        })
    }
    componentDidMount() {
        this.dataUser();
        this.getUserTim();
        // this.getTim();
    }
    handleFormChangeTambahPemain = (event) => {
        let data_pemainNew = { ...this.state.data_pemain };
        data_pemainNew[event.target.name] = event.target.value;
        data_pemainNew['id_tim'] = this.state.dataUserTim.id
        this.setState({
            data_pemain: data_pemainNew
        }, () => console.log(this.state.data_pemain)
        )
    }
    handleSubmitTambahAnggotaTim = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/tim/tambah-anggotatim', this.state.data_pemain).then(res => {
            console.log('add-tim', res.data);
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    cariPengguna = (event) => {
        let formCariPengguna = { ...this.state.data_cari };
        formCariPengguna[event.target.name] = event.target.value;
        this.setState({
            data_cari: formCariPengguna
        }, () => this.cariDataPengguna()
        )
    }

    cariDataPengguna() {
        axios.post('http://localhost:8000/user', this.state.data_cari, {
        }).then(res => {
            this.setState({
                data_pengguna: res.data.data.name,
            }, () => console.log('inidata', this.state.data_pengguna))
        })

    }

    render() {
        return (
            <div className="container mt-4">
                <div className="body height-90  d-flex justify-content-between ">
                    <div className="w-25 bg-success br-10">
                        <div className=" d-flex justify-content-center  mt-4">
                            {
                                this.state.dataUser.length == 0 ? (
                                    <Skeleton type='profile' />
                                )
                                    : (
                                        <img src="https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" className="br-50 " width={100} height={100} />

                                    )
                            }
                        </div>
                        <div className='d-flex justify-content-center text-light mt-4 mx-2'>
                            {
                                this.state.dataUser.length == 0 ? (<Skeleton type='title' />
                                ) :
                                    (this.state.dataUser.name)
                            }
                        </div>
                        <div className='d-flex justify-content-center text-light mx-2'>
                            {
                                this.state.dataUser.length == 0 ? (<Skeleton type='title' />
                                ) :
                                    (this.state.dataUser.email)
                            }

                        </div>
                    </div>
                    <div className="w-75 bg-success br-20 ml-4">
                        {
                            this.state.dataUserTim ?
                                (
                                    <div>
                                        <form>
                                            <div className="form-row mt-4 mx-4 px-4'">
                                                <div className="col-12">
                                                    <input type="text" className="form-control" placeholder="Cari Pengguna" value={this.state.data_cari.email} name="email" onChange={this.cariPengguna} />
                                                </div>
                                            </div>
                                        </form>
                                        {
                                            this.state.data_pengguna ? (
                                                <div className="mt-4 mx-4 px-4'">
                                                    <div className="col-12">

                                                        <form onSubmit={this.handleSubmitTambahAnggotaTim}>
                                                            <input type="hidden" name="id_tim" className="form-control form-shadow" value={this.state.dataUserTim.id} />
                                                            <div className="form-group row">
                                                                <label className="col-sm-2 col-form-label">Nama Pemain</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text" name="nama_pemain" className="form-control form-shadow" onChange={this.handleFormChangeTambahPemain} value={this.state.data_pemain.nama_pemain} placeholder="Masukkan Nama Pemain" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label className="col-sm-2 col-form-label">No Pemain</label>
                                                                <div className="col-sm-10">
                                                                    <input type="number" name="no_punggung" className="form-control form-shadow" onChange={this.handleFormChangeTambahPemain} placeholder="Masukkan No Punggung" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label className="col-sm-2 col-form-label">Posisi</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text" name="posisi" className="form-control form-shadow" onChange={this.handleFormChangeTambahPemain} placeholder="Masukkan Posisi" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label className="col-sm-2 col-form-label">Status</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text" name="status" className="form-control form-shadow" onChange={this.handleFormChangeTambahPemain} placeholder="Status" />
                                                                </div>
                                                            </div>
                                                            <button type="submit" className="btn btn-success btn-block mb-4">Tambah Tim</button>
                                                        </form>
                                                    </div>
                                                </div>

                                            ) : (
                                                this.state.data_cari.email != "" ?
                                                    <div className="text-center bg-white mx-4 py-2 br-20">
                                                        <div className="col-12">
                                                            <span>Data Tidak Ditemukan</span>
                                                        </div>
                                                    </div>
                                                    : ''

                                            )

                                        }
                                        <div className="mt-4 mx-4 px-4">
                                            <div className="col-12">
                                                <div className="bg-white tim-saya br-20">
                                                    <div className="d-flex justify-content-center font-weight-bold">
                                                        {this.state.nama_tim}
                                                    </div>
                                                    <div className="d-flex justify-content-between bg-danger mb-2 text-center py-2 text-white">
                                                        <div className="w-25">
                                                            Nama Pemain
                                                        </div>
                                                        <div className="w-25">
                                                            No Punggung
                                                        </div>
                                                        <div className="w-25">
                                                            Posisi                                                        </div>
                                                        <div className="w-25">
                                                            Status
                                                        </div>
                                                    </div>
                                                    {this.state.daftar_pemain.map(pemain => {
                                                        return (
                                                            <div className="d-flex justify-content-between bg-danger mb-2 text-center py-2 text-white">
                                                                <div className="w-25">
                                                                    {pemain.nama_pemain}
                                                                </div>
                                                                <div className="w-25">
                                                                    {pemain.no_punggung}
                                                                </div>
                                                                <div className="w-25">
                                                                    {pemain.posisi}
                                                                </div>
                                                                <div className="w-25">
                                                                    {pemain.status}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                                :
                                <div className='mt-4 mx-4 px-4'>
                                    <h3 className="text-center">Buat Tim</h3>
                                    <form onSubmit={this.handleSubmitBuatTim} encType="multipart/form-data" >
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Logo Tim</label>
                                            <div className="col-sm-10">
                                                <input type="file" name="logo_tim" className="form-control form-shadow" onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Nama Tim</label>
                                            <div className="col-sm-10">
                                                <input type="text" name="nama_tim" className="form-control form-shadow" value={this.state.formBuatTim.nama_tim} onChange={this.handleFormChangeBuatTim} placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success btn-block mb-4">Buat Tim</button>
                                    </form>
                                </div>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default User;
