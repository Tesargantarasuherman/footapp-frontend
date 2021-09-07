import React, { Component } from 'react';

class Artikel extends Component {
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
                    <div className="row">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Artikel;
