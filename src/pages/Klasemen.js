import React, { Component } from 'react';
import axios from 'axios'

class Klasemen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            klasemen: []
        };
    }
    componentDidMount() {
        let idKlasemen = this.props.match.params.id;

        axios.get(`http://localhost:8000/klasemen/${idKlasemen}`).then(res => {
            this.setState({
                klasemen: res.data.data.klasemen
            }, () => console.log(this.state.klasemen))
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="container mt-2">
                <table className="table table-striped">
                    <thead>
                        <tr className="bg-success">
                            <th scope="col">#</th>
                            <th scope="col">Nama Klub</th>
                            <th scope="col">Main</th>
                            <th scope="col">Menang</th>
                            <th scope="col">Kalah</th>
                            <th scope="col">Imbang</th>
                            <th scope="col">Poin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.klasemen.map((klasemen) => {
                            return (
                                <tr>
                                    <td>{klasemen.no}</td>
                                    <td>{klasemen.nama_klub}</td>
                                    <td>{klasemen.main}</td>
                                    <td>{klasemen.menang}</td>
                                    <td>{klasemen.kalah}</td>
                                    <td>{klasemen.imbang}</td>
                                    <td><strong> {klasemen.poin}</strong></td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Klasemen;
