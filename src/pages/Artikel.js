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
            perPage: 1,
            currentPage: 0,
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    receivedData() {
        axios.get(`http://localhost:8000/artikel`).then(res => {
            const data = res.data.data;
            console.log(data.length)
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd =>
                <React.Fragment>
                    <p>{pd.judul}</p>
                    <p>{pd.deskripsi}</p>
                </React.Fragment>)

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
                <div className="row body-artikel">
                    <div className="col-md-8 img-jumbotron-artikel">
                        <img src="https://images.unsplash.com/photo-1624880357913-a8539238245b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                    </div>
                    <div className="col-md-4">
                        <div className="tanggal-artikel-utama">
                            <p class="font-italic card-text">Bandung, 07 September 2021</p>
                        </div>
                        <div className="judul-artikel-utama"><h5 className="card-title font-weight-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5></div>
                        <div className="isi-artikel-utama my-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </div>
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
                <section className="artikel">
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="200" alt="Card image cap" />
                                <div className="card-body">
                                    <p class="font-italic card-text">Bandung, 07 September 2021</p>
                                    <h5 className="card-title font-weight-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" height="200" alt="Card image cap" />
                                <div className="card-body">
                                    <p class="font-italic card-text">Bandung, 07 September 2021</p>
                                    <h5 className="card-title font-weight-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link class="btn btn-info float-right" to="/artikel/1">Selengkapnya</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination d-flex justify-content-center">
                        <nav aria-label="">
                            <ul class="pagination">

                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>


                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>

                    </div>
                    <div>
                        {this.state.postData}
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
