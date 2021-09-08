import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Artikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0,
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    receivedData() {
        axios.get(`http://localhost:8000/artikel`).then(res => {
            const data = res.data.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map((pd) => {
                if (pd.id_kategori == 0) {
                    return (
                        <React.Fragment>
                            <div className="row body-artikel">
                                <div className="col-md-8 img-jumbotron-artikel">
                                    <img src="https://images.unsplash.com/photo-1624880357913-a8539238245b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                                </div>
                                <div className="col-md-4">
                                    <div className="tanggal-artikel-utama">
                                        <p class="font-italic card-text">{pd.created_at}</p>
                                    </div>
                                    <div className="judul-artikel-utama"><h5 className="card-title font-weight-bold">{pd.judul}</h5></div>
                                    <div className="isi-artikel-utama my-2">{pd.deskripsi.substring(0, 500)}</div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div className="align-self-center w-25">
                                            <img src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" width="50" height="50" className="br-50 rounded mx-auto d-block" />
                                        </div>
                                        <div className="align-self-center w-75 mt-2">
                                            <div>
                                                <strong>Tesar Gantara Suherman</strong>
                                            </div>
                                            <div>
                                                Admin
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
                else {
                    return (
                        <React.Fragment>
                            <div className="col-md-6 my-2">
                                <div className="card">
                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="200" alt="Card image cap" />
                                    <div className="card-body">
                                        <p class="font-italic card-text">{pd.created_at}</p>
                                        <h5 className="card-title font-weight-bold">{pd.judul}</h5>
                                        <p className="card-text">{pd.deskripsi.substring(0, 500)}</p>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
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
            this.receivedData()
        });

    };
    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div className="container body-utama-artikel">

                <section className="artikel">
                    <div className="row mb-4">
                        {this.state.postData}

                    </div>
                    <div className="pagination d-flex justify-content-center">
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
                </section>
            </div>
        );
    }
}

export default Artikel;
