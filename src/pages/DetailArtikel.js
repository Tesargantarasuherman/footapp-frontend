import axios from 'axios';
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import toast, { Toaster } from 'react-hot-toast';

class DetailArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aktif_komentar: false,
            data_blog: [],
            formKomentar: {
                id_artikel: "",
                id_user: "",
                isi: "",
            },
            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0,
        };
    }

    notify = () => toast.success('Komentar Berhasil Ditambahkan');
    notifyError = (mes) => toast.error(mes);

    aktifKomentar = (input) => {
        this.setState({
            aktif_komentar: input,
            formKomentar: {
                isi: "",
            },
        })
    }

    getKomentar = () => {
        let id = this.props.match.params.id
        axios.get(`http://localhost:8000/komentar/${id}`).then(res => {
            const data = res.data.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map((pd) => {
                return (

                    <React.Fragment>
                        <div className="d-flex justify-content-between align-items-center my-2 border-bottom w-75 float-right">
                            <div className="w-25 ">
                                <img src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" width="50" height="50" className="br-50 float-right mx-4" />
                            </div>
                            <div className="w-75">
                                <h5 className="card-title font-weight-bold">{pd.user}</h5>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text w-75">{pd.isi}</p>

                                    <p className="font-italic">4 Menit yang lalu</p>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })

            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),

                postData
            })
        });

    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getKomentar()
        });

    };
    componentDidUpdate() {
        this.getKomentar()
    }
    handleFormChangeKomentar = (event) => {
        let id = this.props.match.params.id

        let formKomentarNew = { ...this.state.formKomentar };
        formKomentarNew[event.target.name] = event.target.value;
        formKomentarNew['id_artikel'] = id;
        formKomentarNew['id_user'] = localStorage.getItem('id');
        this.setState({
            formKomentar: formKomentarNew,
        })
    }
    handleSubmitKomentar = (e) => {
        e.preventDefault()
        if(this.state.formKomentar.isi ==""){
            this.notifyError('Jangan dikosongkan')
        }
        else{
            axios.post('http://localhost:8000/komentar/tambah-komentar', this.state.formKomentar, {
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // 'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                // 'Access-Control-Allow-Origin': 'true',
                // 'Access-Control-Allow-Credentials': 'true',
                'Authorization': `Authorization ${localStorage.getItem("token")}`
            }
        }).then(res => {
            this.setState({
                formKomentar: {
                    isi: "",
                },
            }, () => this.notify())
        })
            .catch(error => {
                console.log(error)
            })

        }
        
    }
    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:8000/artikel/${id}`).then(res => {
            this.setState({
                data_blog: res.data.data.data[0]
            })
        })
        this.getKomentar()
    }
    render() {
        return (
            <div className="container">
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                <div className="row">
                    <div className="col-md-12 img-detail-artikel my-4">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" />
                    </div>
                    <div className="col-md-12 my-4">
                        <p class="font-italic card-text">{(this.state.data_blog.tanggal)}</p>

                        <h5 className="card-title font-weight-bold">{(this.state.data_blog.judul)}</h5>
                        <p className="card-text">{(this.state.data_blog.deskripsi)}</p>
                    </div>
                    
                    <div className="col-md-12 mt-4">
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="w-25">
                                <img src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" width="50" height="50" className="br-50 float-right mx-4" />
                            </div>
                            <div className="w-75">
                                <form onSubmit={this.handleSubmitKomentar}>
                                    <div className="form-group">
                                        <textarea className="form-control" rows={2} placeholder="Masukkan Komentar" value={this.state.formKomentar.isi} onFocus={() => this.aktifKomentar(true)} name="isi"
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
                        {this.state.postData}

                        <div className="pagination d-flex justify-content-center w-100">
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default DetailArtikel;
