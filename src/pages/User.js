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
            },
            image: ""
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
        let formBuatTimNew = { ...this.state.formBuatTim };
        formBuatTimNew[event.target.name] = event.target.value;
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

        axios.post('http://localhost:8000/tim/tambah-tim', fd).then(res => {
            console.log('add-tim', res.data);
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
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
        //     }
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
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
