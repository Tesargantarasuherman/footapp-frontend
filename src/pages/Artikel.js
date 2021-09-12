import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
            const postData = slice.map((pd,index,row) => {
                    return (
                        <React.Fragment>
                            <div className="col-md-6 my-2">
                                <div className="card">
                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="200" alt="Card image cap" />
                                    <div className="card-body">
                                        <p class="font-italic card-text">{pd.created_at}</p>
                                        <h5 className="card-title font-weight-bold">{pd.judul}</h5>
                                        <p className="card-text">{pd.deskripsi.substring(0, 200)}</p>
                                        <Link className="btn btn-info" to={`/artikel/${pd.id}`}>Selengkapnya</Link>
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
            this.receivedData()
        });

    };
    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div className="container body-utama-artikel">
            <OwlCarousel items={1}
            className="owl-theme"
            loop
            autoplay
            >
            <div className="body-banner">
                <div className="title-banner">
                    Lorem IPSUM
                </div>
                <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="The Last of us" />
            </div>
            <div className="body-banner">
                <div className="title-banner">
                    Lorem IPSUM DOLOR
                </div>
                <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="The Last of us" />
            </div>
        </OwlCarousel>

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
