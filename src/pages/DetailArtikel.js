import React, { Component } from 'react';

class DetailArtikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aktif_komentar: false
        };
    }
    aktifKomentar = (input) => {
        this.setState({
            aktif_komentar: input
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 img-detail-artikel my-4">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" />
                    </div>
                    <div className="col-md-12 my-4">
                        <p class="font-italic card-text">Bandung, 07 September 2021</p>

                        <h5 className="card-title font-weight-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                        <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="w-25">
                                <img src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" width="50" height="50" className="br-50 rounded mx-auto d-block" />
                            </div>
                            <div className="w-75">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control" rows={2} placeholder="Masukkan Komentar" onFocus={()=>this.aktifKomentar(true)} />
                                    </div>
                                    {
                                        this.state.aktif_komentar ? (
                                            <>
                                            <button type="button" className="btn btn-danger float-right" onClick={()=>this.aktifKomentar(false)}>Batal</button>
                                            <button type="button" className="btn btn-info float-right mx-2">Kirim</button>

                                            </>
                                        )
                                            :(
                                                ''

                                            )
                                    }
                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center my-2">
                            <div className="w-25">
                                <img src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" width="50" height="50" className="br-50 rounded mx-auto d-block" />
                            </div>
                            <div className="w-75">
                                <h5 className="card-title font-weight-bold">Tesar Gantara Suherman</h5>

                                <p className="card-text w-75">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="font-italic">4 Menit yang lalu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailArtikel;
